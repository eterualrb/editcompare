import fs from "node:fs";
import path from "node:path";

import {
  PLATFORMS,
  type Platform,
  type Tool,
} from "./tool-types";

export { PLATFORMS, formatPlatform } from "./tool-types";
export type { Platform, Tool } from "./tool-types";

const REQUIRED_FIELDS = [
  "slug",
  "name",
  "price",
  "watermark",
  "platforms",
  "bestFor",
  "limits",
  "affiliate",
  "sourceUrl",
  "checkedAt",
] as const;

/**
 * Display order for the comparison table. Tools not listed here keep filesystem
 * order after the known ones, so adding a JSON file never crashes the build.
 */
const TOOL_ORDER = [
  "capcut",
  "canva",
  "clipchamp",
  "kapwing",
  "veed",
  "descript",
  "invideo",
  "filmora",
  "opus-clip",
  "opencut",
  "adobe-express",
  "davinci-resolve",
];

const TOOLS_DIR = path.join(process.cwd(), "content", "tools");

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function validateTool(file: string, raw: unknown): Tool {
  const errors: string[] = [];

  if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
    throw new Error(`[tools] ${file}: expected a JSON object.`);
  }

  const data = raw as Record<string, unknown>;

  for (const field of REQUIRED_FIELDS) {
    if (!(field in data)) {
      errors.push(`missing "${field}"`);
    }
  }

  for (const field of REQUIRED_FIELDS) {
    if (field === "platforms" || field === "affiliate") continue;
    if (field in data && !isNonEmptyString(data[field])) {
      errors.push(`"${field}" must be a non-empty string`);
    }
  }

  if ("affiliate" in data && typeof data.affiliate !== "string") {
    errors.push(`"affiliate" must be a string (empty when no affiliate link exists)`);
  }

  if (typeof data.affiliate === "string" && data.affiliate.length > 0) {
    if (!/^https?:\/\//.test(data.affiliate)) {
      errors.push(`"affiliate" must be an http(s) URL when set`);
    }
  }

  if (!Array.isArray(data.platforms) || data.platforms.length === 0) {
    errors.push(`"platforms" must be a non-empty array`);
  } else {
    const unknownPlatforms = data.platforms.filter(
      (platform) =>
        typeof platform !== "string" ||
        !PLATFORMS.includes(platform as Platform),
    );
    if (unknownPlatforms.length > 0) {
      errors.push(
        `"platforms" contains unsupported values: ${unknownPlatforms.join(", ")} (allowed: ${PLATFORMS.join(", ")})`,
      );
    }
  }

  if (isNonEmptyString(data.sourceUrl) && !/^https:\/\//.test(data.sourceUrl)) {
    errors.push(`"sourceUrl" must be an https URL`);
  }

  if (isNonEmptyString(data.checkedAt) && !/^\d{4}-\d{2}-\d{2}$/.test(data.checkedAt)) {
    errors.push(`"checkedAt" must use YYYY-MM-DD`);
  }

  if ("notFor" in data && data.notFor !== undefined && typeof data.notFor !== "string") {
    errors.push(`"notFor" must be a string when present`);
  }

  if (isNonEmptyString(data.slug) && path.basename(file, ".json") !== data.slug) {
    errors.push(`filename must match slug "${String(data.slug)}"`);
  }

  if (errors.length > 0) {
    throw new Error(`[tools] ${file}: ${errors.join("; ")}`);
  }

  return {
    slug: data.slug as string,
    name: data.name as string,
    price: data.price as string,
    watermark: data.watermark as string,
    platforms: data.platforms as Platform[],
    bestFor: data.bestFor as string,
    notFor: typeof data.notFor === "string" ? data.notFor : undefined,
    limits: data.limits as string,
    affiliate: data.affiliate as string,
    sourceUrl: data.sourceUrl as string,
    checkedAt: data.checkedAt as string,
  };
}

function loadTools(): Tool[] {
  if (!fs.existsSync(TOOLS_DIR)) {
    throw new Error(`[tools] Missing directory: ${TOOLS_DIR}`);
  }

  const files = fs
    .readdirSync(TOOLS_DIR)
    .filter((file) => file.endsWith(".json"))
    .sort();

  const tools = files.map((file) => {
    const fullPath = path.join(TOOLS_DIR, file);
    const source = fs.readFileSync(fullPath, "utf8");

    let parsed: unknown;
    try {
      parsed = JSON.parse(source);
    } catch (error) {
      throw new Error(
        `[tools] ${file}: invalid JSON — ${(error as Error).message}`,
      );
    }

    return validateTool(file, parsed);
  });

  const seen = new Set<string>();
  for (const tool of tools) {
    if (seen.has(tool.slug)) {
      throw new Error(`[tools] Duplicate slug "${tool.slug}".`);
    }
    seen.add(tool.slug);
  }

  const order = new Map(TOOL_ORDER.map((slug, index) => [slug, index]));

  return tools.sort((a, b) => {
    const aIndex = order.get(a.slug) ?? Number.MAX_SAFE_INTEGER;
    const bIndex = order.get(b.slug) ?? Number.MAX_SAFE_INTEGER;
    if (aIndex !== bIndex) return aIndex - bIndex;
    return a.name.localeCompare(b.name);
  });
}

export function getTools(): Tool[] {
  return loadTools();
}

/** CapCut itself is the baseline, not an alternative. */
export function getAlternatives(): Tool[] {
  return getTools().filter((tool) => tool.slug !== "capcut");
}

export function getTool(slug: string): Tool | undefined {
  return getTools().find((tool) => tool.slug === slug);
}

export function getToolsBySlugs(slugs: string[]): Tool[] {
  const tools = getTools();
  return slugs.map((slug) => {
    const tool = tools.find((candidate) => candidate.slug === slug);
    if (!tool) {
      throw new Error(`[tools] Unknown slug requested by a page: "${slug}"`);
    }
    return tool;
  });
}

export function getLastCheckedAt(): string {
  return getTools()
    .map((tool) => tool.checkedAt)
    .sort()
    .at(-1) as string;
}
