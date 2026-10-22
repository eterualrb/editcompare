# capcut-alternatives — CapCut 替代品决策站

> 状态：**本地站点已实现（T1–T7、T10 代码层）；价格需人工复核；部署/收录/联盟申请待人工**
> 定位：**内容站**（不是工具站）。靠联盟变现，不靠订阅。
> 决策依据：[research/volumes.md](research/volumes.md) + [research/serp-2026-10.md](research/serp-2026-10.md)

## 项目一句话

帮被 CapCut 收费劝退的人，在 5 分钟内找到「能替代它、且不踩坑」的剪辑工具。

不是罗列 20 个软件，而是给出**按场景的明确推荐**：做 TikTok 的用哪个、要无水印的用哪个、完全免费的用哪个。

## 先读这三份

| 文件 | 作用 |
|---|---|
| [MVP.md](MVP.md) | 页面清单、词与页的对应、联盟变现、风险 |
| [TASKS.md](TASKS.md) | 12 条可验收任务，按依赖排序 |
| [LAUNCH.md](LAUNCH.md) | 上线检查表：域名 → DNS → Vercel → 收录 |
| [AGENTS.md](AGENTS.md) | 给 AI 编码助手的约定（内容站规则、事实核查、联盟披露） |

上一层的判断标准见 [../../docs/playbooks/02-立项评估.md](../../docs/playbooks/02-立项评估.md)，
渠道判断见 [../../library/b2b_结论.md](../../library/b2b_结论.md)。

## 立项证据

### 量：够门槛

| 词 | 月量 |
|---|---|
| **capcut alternative** | **9,900** |
| apps like capcut | 5,400 |
| alternative to capcut | 1,600 |
| alternatives to capcut | 1,600 |
| apps similar to capcut | 1,300 |
| capcut alternative free | 720 |
| for iphone / for pc / reddit | 各 320 |
| **去重合计** | **约 1–1.5 万/月** |

### 竞争：UGC 和目录文为主

`capcut alternative` 前 5：

| # | 域名 | DR | 类型 |
|---|---|---|---|
| 1 | reddit.com | 95 | 论坛 |
| 2 | eesel.ai | 75 | 目录文 |
| 3 | canva.com | 93 | 品牌工具页 |
| 4 | youtube.com | 99 | 视频 |
| 5 | techsmith.com | 84 | 目录文 |

**真正的产品竞争只有 Canva 一个**，没有任何"专门的 CapCut 替代站"。
这是内容站的典型空位。

### 变现：联盟

Canva / Kapwing / VEED / Descript 等都有联盟计划（**具体佣金待申请时核实**）。
按 5,000–10,000 访问/月、8% 出站、3% 成交、$15–25 佣金估算：**$200–500/月**。

## 当前进度

- [x] 关键词与量级
- [x] 竞争验证（SERP 实测）
- [x] 变现路径确认（联盟）
- [x] T1 初始化
- [x] T2 工具数据校验
- [x] T3 工具数据初稿（**仍需要人审：逐条点开 `sourceUrl` 复核价格与限制**）
- [x] T4 首页对比表
- [x] T5 六个场景页
- [x] T6 SEO（metadata / sitemap / robots / JSON-LD / canonical）
- [x] T7 联盟跳转 + 披露
- [x] T10 三篇指南
- [ ] T8 部署（需域名与 Vercel 账号）
- [ ] T9 提交收录（设 `GOOGLE_SITE_VERIFICATION`、`BING_SITE_VERIFICATION`、`INDEXNOW_KEY`）
- [ ] T11 Cloudflare Web Analytics（设 `NEXT_PUBLIC_CF_ANALYTICS_TOKEN`）
- [ ] T12 分发（Reddit / 目录提交）
- [ ] 申请 3 个联盟账号

### 仍需人工核对的字段（2026-10-20）

站点按 AGENTS 规则把查不到的字段标为「未确认」，上线前请人工过一遍：

- **VEED**：免费版的导出分辨率、时长与存储上限（官方定价页未写，站内标未确认）
- **Adobe Express**：免费版导出是否带水印（官方定价页未提）
- **OpenCut**：导出是否带水印、具体导出限制（项目仍在重写）
- **InVideo**：免费版导出次数与生成额度（官方定价页只列付费档）
- **CapCut**：当前使用美国区 Pro 价格；其他地区以当地官网为准

## 怎么开工

```bash
npm install
cp .env.example .env.local   # 至少设置 NEXT_PUBLIC_SITE_URL
npm run dev                  # http://localhost:3000

npm run build                # 生产构建（含类型检查）
npx tsc --noEmit             # 单独类型检查
npm run lint
```

部署后提交收录：

```bash
SITE_URL=https://your-domain.com INDEXNOW_KEY=xxxx node scripts/indexnow.mjs
```

> `INDEXNOW_KEY` 对应的密钥文件需要放在 `public/<key>.txt` 并先部署。
> 联盟链接通过 `AFFILIATE_*` 环境变量注入；未配置时 `/go/<slug>` 会带 UTM
> 参数跳转到该工具的官网来源页。

需要重新验证选题时（在仓库根目录执行）：

```bash
python3 tools/seo_opportunity.py --kw "capcut alternative" --serp serper --dr ahrefs
```

## 目录约定

```
本项目/
├── AGENTS.md / TASKS.md / MVP.md
├── research/        SERP 证据、量级表（只读）
├── content/         MDX 与工具数据（T2 之后出现）
└── （Next.js 代码初始化后出现在这里）
```
