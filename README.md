# United Stone & Cabinet 网站

USC 网站的全部内容都在这个仓库里：网站代码和建站资料。
Vercel 从 `main` 分支自动部署到 https://www.unitedstoneandcabinet.com ，**往 `main` 推送会直接更新正式网站**。

## 目录

| 位置 | 内容 |
|---|---|
| `app/`、`components/`、`lib/` | 网站代码（Next.js 静态网站） |
| `public/client/` | 网站上显示的图片（网页版，压缩过） |
| `public/brand/` | logo |
| `docs/` | 建站资料，不会发布到网站上 |
| `docs/交接包-2026-11-03/` | 无为导出的交接包：需求、问答、建站记录、参考网站、11/3 上线版截图。先看 `00-交接说明.md` |
| `docs/补充资料-2026-11-06/` | 11/6 补的橱柜成品图、水槽、龙头的说明 |

以后客户补的文字资料放进 `docs/` 下一个新文件夹，比如 `docs/补充资料-2026-11-10/`。不要改交接包里的原文件（`交接包清单.json` 里记着每个文件的校验值）。

## 照片原图在哪里

这个仓库不放照片原图。原图都在客户的 Google Drive（info.unitedstoneandcabinet@gmail.com 的“我的云端硬盘”），网站用的网页版在 `public/client/`。

| 内容 | Drive 文件夹 |
|---|---|
| 石材照片 | `Stone/` |
| 石材案例图（厨房、浴室） | `Stone-Kitchen/` |
| 橱柜门板 | `Shaker/` |
| logo、标签照片、修改意见截图 | `公司资料补11/3/` |
| 橱柜成品图 | `11 6 厨柜成品图/` |
| 厨房水槽 | `11 6 Kitchen Sink/` |
| 浴室台盆 | `11 6 Bathroom Sink/` |
| 龙头和下水配件 | `11 6 Faucet/` |

新照片先放 Drive，再转成 WebP 放进 `public/client/`，文件名用 `补资料-<名字>.webp`。

## 本地运行

```bash
npm install
npm run dev
```

发布前先构建一次，确认没有报错（产物在 `out/`，不进 Git）：

```bash
npm run build
```

## 两台电脑怎么用

第一次（每台电脑做一次）：把仓库克隆到本地普通文件夹，不要放在云盘同步目录里。

```bash
git clone https://github.com/infounitedstoneandcabinet-beep/USC-website
```

每次开始干活前：

```bash
git pull
```

干完活离开前：

```bash
git add -A
git commit -m "写清楚改了什么"
git push
```

## 历史

2026-11-06 以前，资料放在另一个仓库 `USC-website-files`，后来合并进这里的 `docs/`。那个仓库的 Git 历史里还有当时的照片副本（提交 `70e0ca6` 及更早）；仓库删除后就取不回了，原图以 Drive 为准。
