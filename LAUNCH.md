# 上线检查表（域名 → DNS → Vercel → 收录）

> 目标域名：**editcompare.com**（备选：cutcompare.com）
> 前提：域名在 Cloudflare Registrar 或 Porkbun 注册；站点部署在 Vercel 免费档。

## 0. 买域名（10 分钟）

- [ ] 在 [Cloudflare Registrar](https://www.cloudflare.com/domains/) 搜 `editcompare.com`
- [ ] 只买 **1 年**，不要预付多年（项目还没验证）
- [ ] 打开 **Auto-renew**（自动续费）
- [ ] 打开 **Registrar Lock**（防止未授权转移）
- [ ] 账号开 **两步验证**
- [ ] 记录到期日到日历，提前 30 天提醒

**成本：约 $10.44/年。**

## 1. Vercel 绑定域名（10 分钟）

- [ ] Vercel → 项目 → Settings → Domains
- [ ] 添加 `editcompare.com`
- [ ] 添加 `www.editcompare.com`
- [ ] 选一个主域（建议 **apex 为主**，`www` 301 到 apex）
- [ ] 等 Vercel 给出 DNS 记录（通常是 A `76.76.21.21` + CNAME `cname.vercel-dns.com`）

## 2. Cloudflare DNS（5 分钟）

| 类型 | 名称 | 内容 | 代理状态 |
|---|---|---|---|
| A | `@` | `76.76.21.21` | **DNS only（灰云）** |
| CNAME | `www` | `cname.vercel-dns.com` | **DNS only（灰云）** |

- [ ] 两条记录都设为**灰云**（橙云代理和 Vercel 一起用容易出 SSL 问题）
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
NEXT_PUBLIC_SITE_URL=https://editcompare.com
```

- [ ] 不带末尾斜杠
- [ ] 保存后 **Redeploy**（环境变量不会自动应用到已有部署）

**验证：**

```bash
curl -s https://editcompare.com/ | grep -o '<link rel="canonical"[^>]*>'
# 期望：https://editcompare.com
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

- [ ] Google Search Console：添加 **Domain property**（用 DNS TXT 验证，比 URL prefix 更全）
- [ ] 提交 `https://editcompare.com/sitemap.xml`
- [ ] Bing Webmaster Tools：同样添加 + 提交 sitemap
- [ ] 代码已支持验证环境变量：`GOOGLE_SITE_VERIFICATION` / `BING_SITE_VERIFICATION`

## 6. IndexNow（5 分钟）

- [ ] 生成 key（32 位十六进制）
- [ ] 放到 `public/<key>.txt`，内容就是 key 本身
- [ ] Vercel 环境变量设 `INDEXNOW_KEY`
- [ ] 部署后跑 `node scripts/indexnow.mjs`

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
