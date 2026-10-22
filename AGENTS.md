# AGENTS.md — 给 AI 编码/内容助手的项目约定

> 任何 agent 在本仓库（`projects/capcut-alternatives/`）工作前必须先读这份文件。
> 产品范围见 [MVP.md](MVP.md)，任务清单见 [TASKS.md](TASKS.md)。

## 一、项目是什么

CapCut 替代品的**决策内容站**。读者要的是"选哪个"，不是"有哪些"。
没有后端、没有登录、没有订阅。

## 二、技术栈（不要替换）

- Next.js（App Router）+ TypeScript + Tailwind
- 内容：仓库内 `content/tools/*.json` + `content/pages/*.mdx`，**不接 CMS、不接数据库**
- 部署：Vercel
- 统计：Cloudflare Web Analytics
- 不引入需要付费的服务

## 三、目录结构

```
app/
  page.tsx                     首页（对比表 + 场景导航）
  apps-like-capcut/page.tsx    同义变体页
  free/page.tsx                免费向页面
  for-tiktok|for-iphone|for-pc|no-watermark/page.tsx
  opencut/page.tsx             开源替代品评测
  go/[slug]/route.ts           联盟跳转（统计 + 替换）
  guides/[slug]/page.tsx       指南页
components/
  ComparisonTable.tsx
  ToolCard.tsx
  AffiliateDisclosure.tsx
content/
  tools/*.json                 工具数据（唯一事实来源）
  pages/*.mdx                  页面正文
lib/
  tools.ts                     读取与校验
  affiliate.ts                 跳转与统计
```

## 四、工具数据格式（唯一事实来源）

```ts
type Tool = {
  slug: string;
  name: string;
  price: string;          // 必须来自官网，写清免费版限制
  watermark: string;      // "免费版带水印" / "无水印" / "未确认"
  platforms: string[];    // web / windows / mac / ios / android
  bestFor: string;        // 一句话：适合谁
  notFor?: string;        // 一句话：不适合谁
  limits: string;         // 免费额度的具体限制
  affiliate: string;      // 空字符串表示暂无联盟
  sourceUrl: string;      // 核对用的官网地址
  checkedAt: string;      // YYYY-MM-DD
};
```

**页面从数据生成，不要为每个工具手写组件。**

## 五、内容规则（本项目的生命线）

1. **不编造实测。** 没有亲自测过，就不写"我测试了 10 款"。
2. **价格与限制必须可追溯**：每条写 `sourceUrl` + `checkedAt`；没核实写"未确认"。
3. **不贬低竞品**：只陈述可验证的限制（导出时长、水印、平台），不做主观攻击。
4. **联盟链接必须披露**：页面底部固定显示 `AffiliateDisclosure`。
5. **最后更新日期**必须显示在页面上。
6. **一个关键词一个页面**，不要把变体堆进同一页。

## 六、SEO 规则

- 每页唯一 `metadata`：title ≤60 字符（主词在前）、description ≤155
- 每页 1 个 H1，与 title 不完全重复
- `app/sitemap.ts` 自动包含全部页面
- 首页用 `ItemList` 结构化数据；指南页用 `FAQPage`
- 内链：首页 → 场景页 → 工具详情/跳转；每页 3–5 条
- 不做门页（doorway page）、不做关键词堆砌

## 七、完成定义（Definition of Done）

1. `npm run build` 通过，无类型错误
2. `npx tsc --noEmit` 通过
3. 页面在 375px 下不横向滚动
4. 新增/修改文件在任务范围内，无顺手重构
5. 涉及价格/限制的改动，`sourceUrl` 与 `checkedAt` 已更新

## 八、明确不要做

- ❌ 不接支付、不做登录、不做上传
- ❌ 不写"AI 生成 100 篇对比文"（spam 风险）
- ❌ 不伪造评分、不伪造用户评价
- ❌ 不把联盟链接做成不可见的跳转（要披露）
- ❌ 不为了凑页数生成空洞内容

## 九、给 agent 的协作方式

1. **先给计划再动手**：列出要改的文件与步骤，等确认
2. **一次只做 TASKS.md 里的一条**
3. **最小 diff**，不顺手格式化
4. 改完给出验收命令与手动验证方式
5. 规格不清就问，不要自行发明产品需求
