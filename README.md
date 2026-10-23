# capcut-alternatives — CapCut 替代品决策站

**Live：** https://www.editcompare.com

帮被 CapCut 劝退的人，5 分钟内选定替代品。按场景给一个明确推荐，不罗列软件。

## 现状（2026-10-23）

| 项 | 状态 |
|---|---|
| 站点 | ✅ 已上线，canonical / HTTPS / sitemap 正常 |
| 页面 | 15 页（含 About / Privacy） |
| 价格核对 | 11/12 完成，Adobe Express 待补 |
| 收录 | GSC / Bing 已提交，等待首批索引 |
| 联盟 | 未申请（先注册 Payoneer，再申 Kapwing / VEED） |
| 目录 | SaaSHub、AlternativeTo 已提交，待审核 |
| Reddit | 暂停带链接，先攒 karma |

## 下一步

1. ~~验证迁移服务~~ → 已否掉，见 [research/SERVICE-CHECK.md](research/SERVICE-CHECK.md)
2. 验证「短视频剪辑服务」需求（下一个候选）
3. 注册 Payoneer → 申请 Kapwing 联盟
4. 补 Adobe Express 价格

## 文档

| 文件 | 用途 |
|---|---|
| [MVP.md](MVP.md) | 页面清单、关键词映射、变现设计 |
| [TASKS.md](TASKS.md) | 12 条可验收任务 |
| [AGENTS.md](AGENTS.md) | 内容与代码约定（**改代码前先读**） |
| [LAUNCH.md](LAUNCH.md) | 上线 / DNS / 收录检查表 |
| [REVIEW.md](REVIEW.md) | 代码与 SEO 审查记录 |
| [research/PRICE-CHECK.md](research/PRICE-CHECK.md) | 价格核对表 |
| [research/BACKLINKS.md](research/BACKLINKS.md) | 外链与目录提交记录 |
| [research/REDDIT-PLAN.md](research/REDDIT-PLAN.md) | Reddit 排期（当前暂停带链接） |
| [research/volumes.md](research/volumes.md) | 词量与 SERP 证据 |

## 开发

```bash
npm install
cp .env.example .env.local     # 至少设 NEXT_PUBLIC_SITE_URL
npm run dev                    # localhost:3000

npm run build                  # 构建 + 类型检查
npm run lint
```

提交收录（部署后）：

```bash
SITE_URL=https://www.editcompare.com \
INDEXNOW_KEY=<key> \
node scripts/indexnow.mjs
```

## 约定

- 价格/限制必须来自官方页，并在 `content/tools/*.json` 里带 `sourceUrl` + `checkedAt`；查不到就写 `Unconfirmed`
- 联盟链接统一走 `/go/<slug>`，页脚固定披露
- 一个关键词一个页面；场景页只放 3–5 个候选
- 不编造实测、不写未发生的测试结论
