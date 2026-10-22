# 上线检查表（域名 → DNS → Vercel → 收录）

> 目标域名：**www.editcompare.com**（主域，apex 308 到 www；备选：cutcompare.com）
> 前提：域名在 Cloudflare Registrar 或 Porkbun 注册；站点部署在 Vercel 免费档。

## 0. 买域名（10 分钟）

- [x] 在 [Cloudflare Registrar](https://www.cloudflare.com/domains/) 搜 `editcompare.com`
- [x] 只买 **1 年**，不要预付多年（项目还没验证）
- [ ] 打开 **Auto-renew**（自动续费）
- [ ] 打开 **Registrar Lock**（防止未授权转移）
- [ ] 账号开 **两步验证**
- [ ] 记录到期日到日历，提前 30 天提醒

**成本：约 $10.44/年。**

## 1. Vercel 绑定域名（10 分钟）

- [ ] Vercel → 项目 → Settings → Domains
- [x] 添加 `editcompare.com`
- [x] 添加 `www.editcompare.com`
- [x] 主域已定为 **www**（Vercel 默认把 apex 308 到 www），不要再改方向
- [ ] 等 Vercel 给出 DNS 记录（通常是 A `76.76.21.21` + CNAME `cname.vercel-dns.com`）

## 2. Cloudflare DNS（5 分钟）

| 类型 | 名称 | 内容 | 代理状态 |
|---|---|---|---|
| A | `@` | `76.76.21.21` | **DNS only（灰云）** |
| CNAME | `www` | `cname.vercel-dns.com` | **DNS only（灰云）** |

- [x] 两条记录都是**灰云**（已验证：CNAME @ + CNAME www → `983b543366d807d5.vercel-dns-017.com`）
- [ ] 删除注册商自带的占位 A 记录 / parking 页面记录
- [ ] 等待生效（通常 1–5 分钟）

**验证：**

```bash
dig +short editcompare.com
curl -I https://editcompare.com
```

## 3. 环境变量（关键，P0）

Vercel → Settings → Environment Variables（Production + Preview 都要）：

```
NEXT_PUBLIC_SITE_URL=https://www.editcompare.com
```

- [ ] 不带末尾斜杠
- [x] 已 Redeploy（canonical 已切换到 `https://www.editcompare.com`）

**验证：**

```bash
curl -s https://www.editcompare.com/ | grep -o '<link rel="canonical"[^>]*>'
# 期望：https://www.editcompare.com
curl -s https://editcompare.com/robots.txt
# 期望：Host / Sitemap 都是新域名
curl -s https://editcompare.com/sitemap.xml | head
# 期望：13 条 URL，全部是新域名
```

## 4. 邮箱（可选，5 分钟）

- [ ] Cloudflare → Email → Email Routing
- [ ] 建 `hello@editcompare.com` → 转发到你的常用邮箱
- [ ] 需要发信时再配 SPF/DKIM（只收信不用）

## 5. 搜索平台（10 分钟）

### 5.1 Google Search Console（网域资源 + DNS 验证）

1. 打开 <https://search.google.com/search-console>，用 Google 账号登录
2. 左上角资源下拉 → **添加资源**
3. 选右侧 **网域（Domain）**（不要选「网址前缀」）
4. 输入 `editcompare.com`（不要 www、不要 https://）
5. Google 给出一条 TXT，形如 `google-site-verification=xxxx`，整串复制
6. Cloudflare → DNS → Add record：
   - Type `TXT`，Name `@`，Content 粘贴整串（不加引号），TTL Auto
7. 回 GSC 点 **验证**（失败就等 5–10 分钟再点）
8. 左侧 **索引 → 站点地图** → 输入 `sitemap.xml` → 提交
9. 顶部搜索框输入 `https://www.editcompare.com/` → **请求编入索引**

验证 TXT 是否生效：

```bash
dig +short TXT editcompare.com @1.1.1.1
```

### 5.2 Bing Webmaster Tools

1. 打开 <https://www.bing.com/webmasters>
2. 添加网站 → 选 **从 Google Search Console 导入**（最快）
3. 导入后提交同一个 sitemap

- [ ] Google Search Console：添加 **Domain property**（用 DNS TXT 验证，比 URL prefix 更全）
- [ ] 提交 `https://editcompare.com/sitemap.xml`
- [ ] Bing Webmaster Tools：同样添加 + 提交 sitemap
- [ ] 代码已支持验证环境变量：`GOOGLE_SITE_VERIFICATION` / `BING_SITE_VERIFICATION`

## 6. IndexNow（5 分钟）

已生成 key 文件：`public/6ab5c00fc998ff629e2a940c3bd47de2.txt`（内容就是 key 本身）。
部署后运行：

```bash
SITE_URL=https://www.editcompare.com \
INDEXNOW_KEY=6ab5c00fc998ff629e2a940c3bd47de2 \
node scripts/indexnow.mjs
```

- [ ] 生成 key（32 位十六进制）
- [ ] 放到 `public/<key>.txt`，内容就是 key 本身
- [ ] Vercel 环境变量设 `INDEXNOW_KEY`
- [ ] 部署后跑 `node scripts/indexnow.mjs`

## 6.5 已验证（2026-10-22）

| 项 | 结果 |
|---|---|
| DNS | apex / www 均解析到 Vercel（`983b543366d807d5.vercel-dns-017.com`） |
| HTTPS | Let's Encrypt，`CN=www.editcompare.com`，有效期至 2027-01-20 |
| 跳转 | http → https → www，308 |
| canonical | 13/13 页面全部 = `https://www.editcompare.com/...` |
| sitemap | 13 条，全部 www，lastmod 2026-10-22 |
| robots | Host / Sitemap 均为 www；`/go/` 已 disallow |
| `/go/clipchamp` | 302 + noindex + no-store |
| 404 | 返回 404 |
| OG 图 | 200，1200×630 |
| HTML | `lang="en"`、viewport 正常、H1 唯一、ItemList 正常 |

## 7. 上线后 24 小时检查

- [ ] `https://editcompare.com` 200，`https://www.editcompare.com` 301 到主域
- [ ] 手机打开不横向溢出
- [ ] `/go/clipchamp` 302 正常
- [ ] GSC 显示「已发现」或「已编入索引」
- [ ] 无 mixed content 警告

## 8. 常见故障

| 现象 | 原因 | 解决 |
|---|---|---|
| Vercel 显示 Invalid Configuration | DNS 还没生效 | 等 10 分钟，`dig` 确认 |
| 502 / SSL 错误 | Cloudflare 橙云 + Vercel | 改灰云 |
| canonical 还是旧域名 | 没 Redeploy | 重新部署 |
| www 和 apex 都能打开 | 没设重定向 | Vercel Domains 里设 redirect |
| GSC 抓取失败 | robots 或 DNS | 用 URL Inspection 看具体原因 |
