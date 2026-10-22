# Review & SEO 检查报告

> 检查时间：2026-10-22
> 范围：代码质量、构建、SEO 技术项、内容质量、转化追踪
> 方式：`npm run build` + `tsc --noEmit` + `eslint` + 本地生产服务逐页抓取

## 结论

**代码质量：可以上线。SEO 基础：扎实。但有 2 个 P0 必须先处理，否则上线即错。**

| 维度 | 评分 | 说明 |
|---|---|---|
| 构建 / 类型 / Lint | 10/10 | 全部通过，无警告 |
| SEO 技术项 | 9/10 | title/description/canonical/H1/JSON-LD 全部达标 |
| 内容结构 | 8/10 | 10 个工具数据完整、有 sourceUrl 与 checkedAt |
| 内容准确性 | 8/10 | 已移除 CapCut 自身并补两个真替代品；价格仍需美国节点复验 |
| 转化追踪 | 4/10 | 点击只进 console，没有看板 |
| 可访问性 | 8/10 | 表头 scope、筛选 aria、caption 都有；缺 skip link |

---

## 一、P0（上线前必须修）

> **2026-10-22 更新：P0-2 已修复，P0-1 仍待处理（需要你设置域名）。**

### P0-1 域名还是占位符

```
实测 og:url       = https://your-domain.com
实测 canonical    = https://your-domain.com/...
实测 sitemap      = https://your-domain.com/...
实测 robots Host  = https://your-domain.com
```

`NEXT_PUBLIC_SITE_URL` 现在等于 `.env.example` 里的占位值。
**上线后会告诉 Google "规范地址是 your-domain.com"**，等于把权重送给一个不属于你的域名。

**修法**：Vercel 环境变量设成真实域名（不带末尾斜杠），重新部署，然后复查：

```bash
curl -s https://<你的域名>/ | grep -o '<link rel="canonical"[^>]*>'
```

### P0-2 `capcut-web` 被当成"替代品" —— ✅ 已修复

`content/tools/capcut-web.json` 是 **CapCut 自己的网页版**，但它出现在：

- 首页「10 个替代品」列表
- `/free` 的 5 个推荐里
- `/for-tiktok`、`/for-iphone`、`/for-pc`、`/no-watermark`、`/opencut` 的候选里

**这是内容逻辑错误**：CapCut Web 不是 CapCut 的替代品。
用户发现后会直接失去信任，而这恰好是这个站唯一的资产。

**修复方式（2026-10-22 执行）**：

| 动作 | 结果 |
|---|---|
| 删除 `content/tools/capcut-web.json` | 全站不再把 CapCut 自己算作替代品 |
| 新增 `filmora.json` | 免费版带水印；Basic $49.99/yr、Advanced $59.99/yr、Premium $99.99/yr（来源：官方定价页） |
| 新增 `opus-clip.json` | 免费带水印；Starter $15/mo、Pro $29/mo（来源：官方定价页） |
| 更新 `TOOL_ORDER` 与 7 个页面的候选 | 替代品从 10 个变 11 个 |
| 同步文案 | 首页/布局/`/apps-like-capcut`/disclosure 的 "10" 全部改为 "11" |

**顺带修掉的另一个问题**：场景页原来把全部 10 个工具都渲染一遍，
现在收紧到 3–5 个（`/no-watermark` 4 个、`/opencut` 3 个），
重复度问题有所缓解（但结构相似度仍在 43–45%，见 P1-2）。

验证：

```
首页 title        = CapCut Alternative: 11 Best Alternatives Compared (2026)
JSON-LD ItemList  = 11 项
首页工具链接      = 11 个（含 filmora、opus-clip，不含 capcut-web）
```

---

## 二、P1（影响增长，建议本周修）

### P1-1 转化追踪是空的

`app/go/[slug]/route.ts` 只做了 `console.info`：

- Vercel 日志不持久，也没有聚合
- Cloudflare Web Analytics 不含这个事件
- 结果：**不知道有多少人点了联盟链接**，也就无法算 CTR 和收入

**修法**（零预算）：接 GoatCounter 或 Umami 的免费档，在 `/go` 跳转前用
`sendBeacon` 打一个 `affiliate_click` 事件；或者用 Vercel 的 Log Drain（付费）导出。

### P1-2 场景页之间 40–45% 内容重复 —— 🟡 部分改善

实测正文相似度：

| 页面组合 | 相似度 |
|---|---|
| apps-like-capcut ↔ free | 45% |
| for-pc ↔ no-watermark | 45% |
| apps-like-capcut ↔ no-watermark | 44% |
| apps-like-capcut ↔ for-pc | 43% |

原因：每个场景页都把同一张 10 行对比表 + 同一批工具卡全量渲染了一遍。

**风险**：Google 可能判定为近似重复页，稀释彼此的排名。

**已做（2026-10-22）**：

| 动作 | 结果 |
|---|---|
| 场景页只渲染 3–5 个候选（不再全量 10 个） | 结构重复下降 |
| `/for-pc` 新增 PC 专属章节 + 3 问 FAQ | 45% → 38%，字数 805 → 1137 |
| `/no-watermark` 新增「三种水印」+ 60 秒测试 + FAQ | 43% → 39%，字数 775 → 1019 |
| 修正 4 处残留的 "CapCut Online" 文案 | 不再自相矛盾 |

**剩余**：`/free ↔ /no-watermark` 仍有 39%（共享"如何验证水印"区块）。
若要继续降，需重写该区块或让两页使用不同的验证路径。

### P1-3 价格需要一次复验

所有 `checkedAt` 都是 2026-10-20，但：

- `capcut.com/pricing` 从当前网络会 **302 到 capcut.cn**（地区判定）
- `canva.com/pricing` 直接 403
- Canva 的 `$144/yr` 与常见美国报价（$120–150 区间）需要确认

**修法**：用美国节点逐条截图存档（`research/pricing/`），把 `checkedAt` 更新成截图日期。
这不只是 SEO，是这个站的信任基础。

### P1-4 缺 Breadcrumb 结构化数据

指南页有 `FAQPage`，首页有 `ItemList`，但全站没有 `BreadcrumbList`。
加上之后 SERP 里能显示层级路径，点击率通常有小幅提升。

### P1-5 `/guides` 索引页偏薄（293 词）

只有标题 + 链接。建议每个指南补 1–2 句"读完能解决什么"，并链回对应场景页。

### P1-6 联盟链接没有 `rel="sponsored"`

`/go/*` 是内部 302 跳转（已 `noindex` + `no-store`，做法正确），
但页面上指向 `/go/` 的 `<a>` 没有 `rel`。

Google 对联盟链接的建议是标注 `rel="sponsored"`。虽然是内部跳转，
加上更稳妥，也方便以后做广告合规审查。

---

## 三、P2（可选优化）

| 项 | 说明 |
|---|---|
| `robots.txt` 的 `Host:` | 只有 Yandex 用，可删 |
| 缺 skip link | 键盘用户要按 20+ 次才能到正文 |
| 移动端表格 | 首列建议 sticky，横向滚动时仍能看到工具名 |
| 场景页 FAQ | 可加 3–4 条问答 + `FAQPage`，抢 PAA |
| 每页独立 OG 图 | 现在全站共用一张，够用 |
| `/disclosure` 进 sitemap | 可保留，也可 noindex |

---

## 四、本次已修复

| 修复 | 内容 |
|---|---|
| **OG 图缺失** | 新增 `app/opengraph-image.png`（1200×630），`og:image` / `twitter:image` 已生效 |
| **表格无障碍** | `ComparisonTable` 增加 `<caption class="sr-only">` |
| **首页时效信号** | 首页补上 `LastUpdated`（"Facts checked …"） |
| **P0-2 内容逻辑** | 删除 CapCut Web，新增 Filmora 与 OpusClip，全站计数 10→11 |
| **场景页候选收紧** | 从「全量 10 个」改为 3–5 个，降低页面间重复 |

复测结果：

```
og:image        = /opengraph-image.png (1200×630)
twitter:card    = summary_large_image
caption         = "CapCut alternatives compared by free tier, watermark, platforms, and best fit"
```

---

## 五、实测数据（供对比）

### 每页 title / description 长度

| 页面 | title 长度 | desc 长度 | H1 | H2 | 正文词数 |
|---|---|---|---|---|---|
| / | 56 | 143 | 1 | 6 | 1102 |
| /apps-like-capcut | 52 | 144 | 1 | 5 | 861 |
| /free | 58 | 146 | 1 | 5 | 847 |
| /for-tiktok | 52 | 150 | 1 | 5 | 816 |
| /for-iphone | 51 | 148 | 1 | 5 | 838 |
| /for-pc | 53 | 134 | 1 | 5 | 805 |
| /no-watermark | 52 | 152 | 1 | 6 | 775 |
| /opencut | 50 | 147 | 1 | 6 | 863 |
| /guides | 49 | 142 | 1 | 3 | **293** |
| /guides/remove-capcut-watermark | 53 | 139 | 1 | 9 | 1126 |
| /guides/transfer-capcut-projects | 54 | 147 | 1 | 8 | 1086 |
| /guides/capcut-free-limits | 45 | 140 | 1 | 9 | 1055 |
| /disclosure | 34 | 128 | 1 | 5 | 440 |

**全部在限制内**（title ≤60、desc ≤160），H1 唯一。

### 跳转与索引

```
GET /go/clipchamp        → 302, no-store, X-Robots-Tag: noindex
GET /go/does-not-exist   → 404
GET /robots.txt          → Allow / , Disallow /go/
GET /sitemap.xml         → 13 条 URL
GET /nope-xyz            → 404
```

### 结构化数据

| 页面 | 类型 |
|---|---|
| 首页 | `ItemList`（10 项） |
| 指南页 | `FAQPage`（4 问） |

---

## 五点五、价格核对（2026-10-22）

11/12 个工具已对照官方截图核对：8 个一致，4 个修正（CapCut 补 Ultra/Teams、OpusClip 补年付、DaVinci 改为 $236、Descript 去掉未核实的月付）。
详见 [research/PRICE-CHECK.md](research/PRICE-CHECK.md)。Adobe Express 待补。

## 六、建议的下一步

1. **今天**：设真实域名（P0-1，唯一剩下的阻塞项）
2. **本周**：接点击统计、收紧场景页候选数量、补 breadcrumb
3. **上线后**：用美国节点复验一遍价格，截图存档
4. **两周后**：看 GSC 收录与曝光，再决定是否加 FAQ / 新场景页

## 七、给 agent 的交接说明

- 构建命令：`npm run build`；类型：`npx tsc --noEmit`；lint：`npm run lint`
- 本地验收：`npm run start -- -p 3001`，然后逐页 `curl`
- 改内容只动 `content/tools/*.json`，不要手改页面里的价格字符串
- 任何价格/限制的改动必须同时更新 `sourceUrl` 与 `checkedAt`
