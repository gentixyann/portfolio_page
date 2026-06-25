# Portfolio Page

Gento のポートフォリオサイト。**Next.js (App Router) + TypeScript + Tailwind CSS** で構築し、Firebase Hosting に静的エクスポートでデプロイします。

## 構成

- **Top** — トップ / 自己紹介（`components/Hero.tsx`）
- **大事にしていること** — Values（`components/Values.tsx`）
- **Work** — つくったもの（`components/Work.tsx`）
- **スキル** — Skills & 経歴（`components/Skills.tsx`）

掲載内容（プロフィール・Work・スキル・経歴・大事にしていること）はすべて
`lib/data.ts` に集約しているので、ここを編集すれば各セクションに反映されます。

## Work を追加する

Work（プロジェクト）は `lib/data.ts` の `projects` 配列で管理しています。
**新しい順に並ぶ**ため、新しいものは配列の **先頭** に追加してください。
トップページは先頭から最大16件（PC=4カラム×4行）を表示し、`/work` は全件表示します。

### 手順

1. **画像を置く**
   `public/images/portfolio/<slug>/` に画像を配置します（`<slug>` はURLにも使う英小文字・ハイフンの識別子）。画像サイズを調べる必要はありません。

2. **`lib/data.ts` の `projects` 配列の先頭に追記**

   ```ts
   {
     slug: "my-project",                       // URL: /work/my-project（一意・英小文字ハイフン）
     title: "プロジェクト名",
     year: "2025",
     description: "概要文。トップのカードでは2行で省略され、詳細ページでは全文表示。",
     categories: ["App"],                       // フィルタ用。下記の決まった値から1つ以上
     roles: ["企画", "開発"],                    // 詳細ページ「Role」/ カードのピル表示
     links: [                                   // 詳細ページ「Links」（複数可）
       { label: "Website", url: "https://example.com" },
     ],
     images: [                                  // 画像パスのみ。1枚目がカードのサムネイル
       "/images/portfolio/my-project/cover.png",
       "/images/portfolio/my-project/sub.png",
     ],
   },
   ```

### 各フィールドの意味

| フィールド    | 役割                                                                 |
| ------------- | -------------------------------------------------------------------- |
| `slug`        | 詳細ページのURL（`/work/<slug>`）。一意にする                          |
| `title`       | プロジェクト名                                                        |
| `year`        | 制作年（表示用の文字列）                                              |
| `description` | 概要。カードは2行省略、詳細ページは全文                               |
| `categories`  | 一覧フィルタ用タグ。`"App" \| "Web Service" \| "Event" \| "Community" \| "Other"` から選ぶ |
| `roles`       | 役割（例: 企画 / 開発 / デザイン）。カードと詳細ページにピル表示       |
| `links`       | 外部リンク。`label`（表示名）と `url` の配列。複数可                   |
| `images`      | 画像パスの配列。1枚目=サムネ。サイズ指定は不要（自動で実寸比表示）    |

> **カテゴリを増やしたい場合**は `lib/data.ts` の `CATEGORIES` 配列に値を追加すると、フィルタタブにも自動で反映されます。

## 開発

```bash
npm install      # 依存をインストール
npm run dev      # 開発サーバー (http://localhost:3000)
npm run build    # 本番ビルド + 静的エクスポート（out/ に出力）
```

## デプロイ（Firebase Hosting）

```bash
npm run deploy   # build → firebase deploy --only hosting
```

`firebase.json` の `public` は静的エクスポート先の `out` を指しています。

## 技術スタック（バージョン固定）

| パッケージ   | バージョン |
| ------------ | ---------- |
| next         | 16.2.9     |
| react        | 19.2.7     |
| tailwindcss  | 4.3.1      |
| typescript   | 6.0.3      |
