# 外链与目录提交记录

> 目标：让 Google/Bing 从**别的地方**发现 `www.editcompare.com`，而不是只靠 sitemap。

## 一、已提交

| 渠道 | 类型 | 提交日期 | 状态 | 页面 URL | 备注 |
|---|---|---|---|---|---|
| **SaaSHub** | 软件目录 | 2026-10-22 | 🟡 待审核 | 待生成 | 接受内容站；需填 3+ 竞品；通常 1–3 天 |
| **AlternativeTo** | 软件目录 | 2026-10-22 | 🟡 待审核 | 待生成 | 名称检查曾报错（已重填）；可能因"不是 app"被拒 |
| **GitHub README** | 自有仓库 | 2026-10-22 | ✅ 已上线 | https://github.com/eterualrb/editcompare | **nofollow**，作用是让爬虫发现，不传权重 |
| **X 简介** | 社交资料 | 2026-10-22 | ✅ 已放 | 待确认 | 通常 nofollow，但 Google 会抓资料页 |

**提交后不要重复提交**，重复会被判垃圾。

## 二、待做（按优先级）

| 渠道 | 耗时 | 说明 |
|---|---|---|
| **Quora** | 20 分钟 | 回答 "best CapCut alternative"，审核比 Reddit 松 |
| **Indie Hackers 产品页** | 15 分钟 | 接受内容站，社区流量 |
| **BetaList** | 15 分钟 | 需要审核，适合早期项目 |
| **Product Hunt** | 30 分钟 | 可先建 upcoming 页，正式发布要选日子 |

## 三、暂停

| 渠道 | 状态 | 原因 |
|---|---|---|
| **Reddit** | ⏸ 暂停 2–4 周 | 首条评论被站级过滤；账号 3 天、karma 1、域名 3 天 |
| 复出条件 | — | karma ≥ 100、账号 ≥ 30 天、域名 ≥ 30 天，且先发不带链接的评论 |

## 四、怎么验证外链是否生效

**① 页面是否上线**

```bash
curl -sI https://www.saashub.com/editcompare | head -1
```

**② 链接是不是 dofollow**

打开页面源码，搜你的域名：

```bash
curl -s https://www.saashub.com/editcompare | grep -o '<a[^>]*editcompare[^>]*>'
```

- 出现 `rel="nofollow"` → 只带来流量，不传递权重
- 没有 nofollow → 传递权重（更有价值）

**③ Google 是否发现**

3–7 天后查：

```bash
curl -s "https://google.serper.dev/search" ... "site:editcompare.com"
```

出现 1 条以上 = 被收录。

## 五、判断标准

| 时间 | 期望 | 不达标怎么办 |
|---|---|---|
| 3 天 | 至少 1 个目录通过 | 换 Indie Hackers / BetaList |
| 7 天 | Google 收录 ≥ 1 页 | 检查目录链接是否被 nofollow、是否有其他外链 |
| 14 天 | 收录 ≥ 5 页 | 补 Quora / Medium，或做一次 Product Hunt |
| 30 天 | 有曝光数据 | 回看标题与关键词匹配 |
