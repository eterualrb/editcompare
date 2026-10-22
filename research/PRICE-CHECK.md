# 价格核对表（12 个工具）

> 目的：每条价格/限制都能对上官方页面。改完更新 `checkedAt`。
> 方法：**美国节点 + 无痕窗口**（避免跳到地区站，比如 capcut 现在会跳到 `/ja-jp/`）。
> 截图存到 `research/pricing/<slug>.png`。

## 一、核对表

| # | 工具 | 官方定价页 | 当前写法 | 重点确认 | 风险 | 截图 |
|---|---|---|---|---|---|---|
| 1 | **Canva** | https://www.canva.com/pricing/ | Pro **$144/yr**（≈$12/mo）；Business $250/yr | Pro 年付到底是 $120 还是 $144；免费版导出是否带水印 | 🔴 高：数字可能过时 | `canva.png` |
| 2 | **CapCut** | https://www.capcut.com/pricing | Pro **$19.99/mo** 或 **$179.99/yr** | 必须是**美国站**价格；免费 1080p 是否无水印 | 🔴 高：会跳地区站 | `capcut.png` |
| 3 | **Clipchamp** | https://clipchamp.com/en/pricing/ | 免费；高级功能含在 Microsoft 365 | 免费导出是否 1080p、是否无水印 | 🟡 中 | `clipchamp.png` |
| 4 | **Filmora** | https://filmora.wondershare.com/shop/buy/buy-video-editor.html | Basic $49.99 / Advanced $59.99 / Premium $99.99（年付）；另有买断 | **哪一档开始去水印**；三档差什么 | 🟡 中 | `filmora.png` |
| 5 | **OpusClip** | https://www.opus.pro/pricing | Free / Starter $15/mo / Pro $29/mo | 免费版水印范围；免费额度是否有分钟数 | 🟡 中：额度未写明 | `opus-clip.png` |
| 6 | **DaVinci Resolve** | https://www.blackmagicdesign.com/products/davinciresolve/ | 免费；Studio **$295** 买断（曾见 $236 促销） | 促销是否结束；免费版上限（4K/60fps） | 🟡 中：促销价易过期 | `davinci-resolve.png` |
| 7 | **VEED** | https://www.veed.io/pricing | Creator $147 / Pro $265 / Studio $465（年付/人） | 年付价之外是否有月付；免费导出水印 | 🟡 中 | `veed.png` |
| 8 | **Kapwing** | https://www.kapwing.com/pricing | Pro **$16/mo**；Business $50/mo（月付） | 年付是否更便宜；免费导出水印 | 🟡 中 | `kapwing.png` |
| 9 | **Descript** | https://www.descript.com/pricing | Hobbyist $16（年）/ $24（月）；Creator $24/$35 | 免费版导出是否带水印 | 🟡 中 | `descript.png` |
| 10 | **InVideo** | https://invideo.io/pricing/ | Starter $10（年，原价 $20）/ Plus $30 / Max $75（每人每月） | 是"每人"还是"每账号"；免费版水印 | 🟡 中 | `invideo.png` |
| 11 | **Adobe Express** | https://www.adobe.com/express/pricing | Premium **$9.99/mo**（月付） | 免费版导出是否带 Adobe 水印（现在标"未确认"） | 🟢 低 | `adobe-express.png` |
| 12 | **OpenCut** | https://github.com/opencut-app/opencut | 免费开源（MIT） | 官方是否提到导出水印（现在标"未确认"） | 🟢 低 | `opencut.png` |

## 二、我这边测到的访问情况

| 工具 | HTTP | 说明 |
|---|---|---|
| CapCut | 200 | **会跳 `/ja-jp/`**，必须用美国节点 |
| Clipchamp | 200 | 正常 |
| DaVinci | 200 | 正常 |
| Filmora | 200 | 正常 |
| OpenCut | 200 | 正常 |
| OpusClip | 200 | 正常 |
| VEED | 200 | 正常 |
| Adobe Express | 403 | 反爬，浏览器能开 |
| Canva / Descript / InVideo / Kapwing | 超时 | 反爬或代理问题，浏览器能开 |

**结论：7 个能直接开，5 个要用浏览器 + 美国节点。** 你手动核对时都是浏览器，不受影响。

## 三、每个工具确认三件事

```
① 免费版：导出分辨率？水印？时长/次数限制？
② 付费版：价格是多少、按月还是按年、按人还是按账号？
③ 我 JSON 里写的，和页面上写的一致吗？
```

## 四、发现不一致怎么改

1. 改 `content/tools/<slug>.json` 的 `price` / `watermark` / `limits`
2. 同步把 `checkedAt` 改成核对当天日期
3. 截图存 `research/pricing/<slug>.png`
4. 重新部署
5. 在本表「核对结果」里打勾

## 五、核对结果（填这里）

| 工具 | 一致？ | 改了什么 | 日期 |
|---|---|---|---|
| Canva | ✅ 一致 | 补上"per person" | 2026-10-22 |
| CapCut | ⚠️ 改 | 补 Ultra $79/mo、Teams $12.49/seat；补 Pro 1200 credits / 1TB | 2026-10-22 |
| Clipchamp | ✅ 一致 | 补"no brand kit"、"4K 需 M365" | 2026-10-22 |
| Filmora | ✅ 一致 | 无 | 2026-10-22 |
| OpusClip | ⚠️ 改 | Pro 补年付 $174/yr（$14.5/mo）；Free 补 60 credits、3 天后不可导出 | 2026-10-22 |
| DaVinci Resolve | ⚠️ 改 | 当前售价写为 $236，MSRP $295 | 2026-10-22 |
| VEED | ✅ 一致 | 无 | 2026-10-22 |
| Kapwing | ✅ 一致 | 无 | 2026-10-22 |
| Descript | ⚠️ 改 | 月付价未截到，改为只写年付；补各档 media hours / credits | 2026-10-22 |
| InVideo | ✅ 一致 | 无 | 2026-10-22 |
| Adobe Express | ⏸ 未核 | 截图未提供，保留原值 | — |
| OpenCut | ✅ 一致 | 无价格页，保持"未确认" | 2026-10-22 |

**核对结论：12 个里 8 个一致，4 个需要修正（CapCut / OpusClip / DaVinci / Descript），Adobe 待补。**

## 七、核对时看到的详情（存档）

| 工具 | 截图里的关键数字 |
|---|---|
| Canva | Pro $144/yr、Business $250/yr（每人）、免费 5GB / 1.6M 模板 / 4.7M 素材 |
| CapCut | Pro $19.99/mo、Ultra $79/mo、Teams $12.49/seat/mo（月付） |
| Clipchamp | 免费 1080p、无水印；4K 需 Microsoft 365 |
| Filmora | Basic $49.99/yr、Advanced $59.99/yr、Premium $99.99/yr |
| OpusClip | Starter $15/mo、Pro $29/mo（年付 $174 → $14.5/mo）、Free 60 credits |
| DaVinci | Studio 页面标价 $236（MSRP $295） |
| VEED | Creator $147/yr、Pro $265/yr、Studio $465/yr（每人） |
| Kapwing | Pro $16/mo、Business $50/mo |
| Descript | Hobbyist $16、Creator $24、Business $50（年付/人） |
| InVideo | Starter $10、Plus $30、Max $75（年付/seat，划线价 $20/$60/$150） |
| OpenCut | GitHub 无价格页 |

## 六、优先级

**先核这 4 个**（数字最可能出错、影响最大）：

1. **Canva** —— $144/yr 我不确定，务必确认
2. **CapCut** —— 地区价差异大，必须美国站
3. **Filmora** —— 三档价格容易记错，且"哪档去水印"直接影响推荐逻辑
4. **DaVinci** —— 促销价会过期，$295 和 $236 只能留一个

其余 8 个如果页面结构和 JSON 一致，5 分钟能扫完。
