# TASKS.md — 按顺序交给 agent 的任务清单

> 用法：**一次只把一条任务 + [AGENTS.md](AGENTS.md) 丢给 agent**，让它先给计划，确认后再动手。
> 目标：14 天上线（每天 2 小时）。每条都有验收标准，达不到不进入下一条。

---

## T1 初始化项目

**做什么**：Next.js（App Router + TS）+ Tailwind 初始化；建目录 `components/ content/tools/ content/pages/ lib/`。

**验收**：
- `npm run build` 通过
- `npm run dev` 首页显示 "OK"
- 无多余依赖

**预计**：30 分钟

---

## T2 定义工具数据与校验

**做什么**：`lib/tools.ts` + 类型，读取 `content/tools/*.json`；手写校验（**不新增依赖**），缺字段构建时报错。

**验收**：
- 故意放一个缺 `sourceUrl` 的 JSON，`npm run build` 报错并指出文件
- 正常 JSON 能读出数组，类型正确

**预计**：40 分钟

---

## T3 写 12 个工具数据（**最需要人审**）

**做什么**：逐个打开官网，记录进 `content/tools/*.json`：

CapCut / Canva / Clipchamp / Kapwing / VEED / Descript / InVideo / Filmora / OpusClip / OpenCut / Adobe Express / DaVinci Resolve（可按实际替换）。

每条必须填：`price`、`watermark`、`platforms`、`bestFor`、`limits`、`sourceUrl`、`checkedAt`。

**验收**：
- 10 条全部有 `sourceUrl` 与当日 `checkedAt`
- 随机抽 3 条，点开 `sourceUrl` 能看到对应价格/限制
- 没有"我测试了"这类未发生的表述
- 未核实的字段写"未确认"，不猜

**预计**：90 分钟（**别全交给 agent，价格必须人看**）

---

## T4 首页对比表

**做什么**：`components/ComparisonTable.tsx` + 首页主体：10 行对比（工具 / 免费额度 / 水印 / 平台 / 适合谁 / 跳转），支持按平台筛选。

**验收**：
- 375px 不横向溢出（可横向滚动表格但页面不抖）
- 每行跳转指向 `/go/[slug]`
- 首屏一句话说清"这页解决什么"

**预计**：60 分钟

---

## T5 六个场景页

**做什么**：`/apps-like-capcut`、`/free`、`/for-tiktok`、`/for-iphone`、`/for-pc`、`/no-watermark`。

每页：H1、一句结论（首推哪个 + 为什么）、3–5 个候选（不是全部 11 个）、内链回首页。

**验收**：
- 每页 title/description 唯一
- 每页首推与理由具体（不能 6 页都推 Canva）
- 每页 3–5 条内链

**预计**：2 天（每天 1 小时）

---

## T6 SEO 基础

**做什么**：每页 `metadata`；`app/sitemap.ts`；`app/robots.ts`；首页 `ItemList`、指南页 `FAQPage` 结构化数据；canonical。

**验收**：
- `/sitemap.xml` 包含全部页面
- 随机一页源码里只有 1 个 h1
- JSON-LD 通过 Google Rich Results 测试
- 每页 canonical 指向正式域名

**预计**：50 分钟

---

## T7 联盟跳转与披露

**做什么**：`app/go/[slug]/route.ts` 做 302 跳转（记录点击后跳转）；`components/AffiliateDisclosure.tsx` 固定展示；`lib/affiliate.ts` 管理映射。

**验收**：
- 点击表格里的按钮能跳到目标站，URL 带联盟参数
- 每页底部有明确披露文案
- 点击事件能被统计（至少 console/日志可见）

**预计**：60 分钟

---

## T8 部署

**做什么**：推到 GitHub → Vercel 导入 → 绑定域名 → 开 Cloudflare 代理（可选）。

**验收**：
- 线上 200，移动端可读
- 页面里的 canonical 是正式域名，不是 localhost

**预计**：45 分钟

---

## T9 提交收录

**做什么**：GSC + BWT 验证；提交 sitemap；写 `scripts/indexnow.mjs` 批量提交。

**验收**：
- 三个后台都有提交记录
- 第二天能在 BWT 看到抓取

**预计**：45 分钟

---

## T10 三篇指南

**做什么**：
1. how to remove CapCut watermark（合规前提下讲官方途径）
2. how to transfer CapCut projects（导出/迁移）
3. CapCut 免费版限制有哪些（对应真实痛点）

每篇 600–900 字，内链到场景页与首页。

**验收**：
- 三篇各有独立 title
- 每篇至少 2 条内链
- 内容基于官方文档/可验证事实，不编造

**预计**：2 小时

---

## T11 统计与转化

**做什么**：接 Cloudflare Web Analytics；在表格按钮与场景页 CTA 埋出站点击事件。

**验收**：
- 线上能看 PV
- 点击 `/go/xxx` 能记录一次事件

**预计**：30 分钟

---

## T12 分发

**做什么**（三选二）：
1. 在 Reddit 相关帖（r/CapCut、r/VideoEditing）**真诚回答问题**，不硬贴链接
2. 提交 2 个免费目录（AlternativeTo 等）
3. Pinterest 建 3 个 pin（对比图）

**验收**：
- 至少 3 条真实曝光（有链接或截图）
- 没有 spam 行为（不刷帖、不复制粘贴）

**预计**：1 小时

---

## 交付顺序

```
T1 → T2 → T3 → T4 → T5 → T6 → T7 → T8 → T9 → T10 → T11 → T12
                      ↘ T6 可与 T5 并行（不同文件）
```

## 不建议交给 agent 的部分

| 工作 | 原因 |
|---|---|
| 工具价格/限制的核对 | 错一个价格就失去信任，必须人看官网 |
| "首推哪个"的判断 | 这是这个站的全部价值 |
| 联盟申请 | 需要真实身份与网站审核 |
| Reddit 回答 | 语气与真诚度决定会不会被反感 |
