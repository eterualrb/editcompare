# MVP 规格：CapCut Alternatives 决策站

> 约束见 [../../docs/CONTEXT.md](../../docs/CONTEXT.md)：零预算、每天 2 小时、先有收入。
> 这是**内容站**，不是工具站；没有后端、没有登录、没有订阅。

## 一、定位（一句话）

被 CapCut 收费劝退的人，来这里 5 分钟选定替代品——按场景推荐，不罗列。

## 二、词与页面的对应

| 页面 | 目标词 | 月量 | 作用 |
|---|---|---|---|
| `/` | capcut alternative | 9,900 | 主入口：11 个替代品对比 + 场景导航 |
| `/apps-like-capcut` | apps like capcut | 5,400 | 同义变体，独立页面避免自相残杀 |
| `/free` | capcut alternative free / free alternatives | 720+260 | "完全免费"意图 |
| `/for-tiktok` | capcut alternative for tiktok | 长尾 | 竖屏/短视频场景 |
| `/for-iphone` | capcut alternative for iphone | 320 | 移动端场景 |
| `/for-pc` | capcut alternative for pc | 320 | 桌面端场景 |
| `/no-watermark` | capcut alternative no watermark | 长尾 | 无水印需求 |
| `/opencut` | opencut | 1,600 | 开源替代品的评测/对比（借品牌词流量） |
| `/guides/remove-capcut-watermark` | how to remove capcut watermark | 长尾 | 导流 + 信任 |
| `/guides/transfer-capcut-projects` | 长尾 | 长尾 | 导流 |

**核心原则：一个关键词一个页面。** 不要把所有变体塞进首页。

## 三、能力边界（别过度承诺）

| 做 | 不做 |
|---|---|
| 基于官网信息的对比（价格、限制、水印、平台） | 编造"我实测了 10 款软件" |
| 明确写出信息来源与抓取日期 | 给出未经验证的性能/画质结论 |
| 联盟链接 + 披露 | 隐藏联盟关系 |
| 静态站，纯前端 | 后端、登录、上传视频 |

⚠️ **每条价格/限制必须来自官网，并记录抓取日期。**
没核实的写"未确认"，不要猜。

## 四、内容结构（每个工具一条）

```json
{
  "slug": "canva",
  "name": "Canva",
  "price": "免费版；Pro $15/月",
  "watermark": "免费版导出带水印（待核实）",
  "platforms": ["web", "ios", "android"],
  "bestFor": "不想装软件、需要模板的人",
  "limits": "免费版有素材与导出门槛",
  "affiliate": "https://...",
  "sourceUrl": "https://www.canva.com/pricing/",
  "checkedAt": "2026-10-20"
}
```

首页表格列：工具 / 免费额度 / 水印 / 平台 / 适合谁 / 跳转。

## 五、变现

| 项目 | 方案 |
|---|---|
| 主要 | 联盟（CPA）：Canva $36/单、VEED 30% 循环、InVideo 50%/25%（**均为公开资料，申请时以官方条款为准**） |
| 次要 | 展示广告（流量起来后再加，Adsense） |
| 不做 | 订阅、付费墙（受众是"找免费"的人） |

### 联盟条款参考（2026-10 查，未逐家核实）

| 项目 | 佣金 | 备注 |
|---|---|---|
| Canva | **$36 / 单** | 通过 Impact；禁止品牌词竞价 |
| VEED | **30% 循环** | 续费也分佣 |
| InVideo | 50%（月付）/ 25%（年付） | — |
| Kapwing | 存在，比例未公开 | 审批宽松 |

来源：[OpenAffiliate/Canva](https://openaffiliate.dev/programs/canva)、[OpenAffiliate/VEED](https://openaffiliate.dev/programs/veed)、[AffiliPilot/Kapwing](https://affilipilot.io/programs/kapwing)

**收入模型**（假设，需上线后校正）：

```
5,000 访问/月 × 8% 出站点击 × 3% 成交 × $15 ≈ $180/月
10,000 访问/月 × 8% × 3% × $20        ≈ $480/月
```

## 六、技术栈（全免费）

- Next.js（App Router）+ TypeScript + Tailwind
- 内容：MDX / JSON 放仓库，**不接 CMS**
- 部署：Vercel 免费档
- 统计：Cloudflare Web Analytics（免费）
- 联盟链接：统一走 `/go/[slug]` 跳转，方便统计与替换

## 七、两周排期（每天 2 小时）

| 天 | 任务 | 完成标志 |
|---|---|---|
| D1 | T1 脚手架 + T2 内容 schema | 本地能跑，字段定稿 |
| D2–D3 | T3 写 12 个工具数据（11 个替代品 + CapCut 自身，逐个核官网） | 12 条数据 + 来源日期 |
| D4 | T4 首页对比表 + 筛选 | 表格可读、移动端不溢出 |
| D5–D6 | T5 六个场景页 | 每页有独立推荐与理由 |
| D7 | T6 SEO（metadata/sitemap/JSON-LD） | 源码检查通过 |
| D8 | T7 联盟跳转 + 披露 + 埋点 | 点击能记录 |
| D9 | T8 部署 + 绑定域名 | 线上可访问 |
| D10 | T9 提交 GSC/BWT/IndexNow | 三个后台有记录 |
| D11–D12 | T10 三篇指南 | 内链完整 |
| D13 | T11 统计看板 | 能看到出站点击 |
| D14 | T12 分发（Reddit 回答 + 目录提交） | 至少 3 条真实曝光 |

## 八、每个页面必须有的东西

- H1 与 title 不完全重复；title ≤60 字符，主词在前
- 首屏一句话说清"这页解决什么问题"
- 对比表（可扫读），不是大段文字
- 每个推荐给"适合谁 / 不适合谁"
- 联盟披露（页面底部固定）
- 最后更新日期
- 3–5 条内链

## 九、验证节点

| 时间 | 看什么 | 不达标 |
|---|---|---|
| 第 14 天 | 收录 ≥ 8 页、曝光 > 0 | 查技术 SEO |
| 第 30 天 | 曝光 > 300、出站点击 > 10 | 换标题/补场景页 |
| 第 60 天 | 有页面进前 50、首个联盟成交 | 内容深度不够 |
| 第 90 天 | 收入 > $50/月 | 放弃或转其他场景 |

## 十、风险

1. **Canva 官方页面已卡位第 3** —— 但它只是一个产品落地页，不是"替代品导航"，
   靠更全的对比和场景化推荐可以切。
2. **YouTube/Reddit 占前排** —— 说明用户在看别人的经验；我们要做的是"比视频更快给出答案"。
3. **联盟佣金可能很低或被拒** —— 先申请 3 家，至少通过 1 家再投入内容。
4. **CapCut 可能改回免费** —— 那这个词族会萎缩；但它已多次调整收费策略，短期不会逆转。
5. **3–6 个月才见流量** —— 这是 SEO 的固有节奏，不要用两周的期待要求它。
