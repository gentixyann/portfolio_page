# Portfolio Page

Gento のポートフォリオサイト。**Next.js (App Router) + TypeScript + Tailwind CSS** で構築し、Firebase Hosting に静的エクスポートでデプロイします。

## 構成

- **Top** — トップ / 自己紹介（`components/Hero.tsx`）
- **大事にしていること** — Values（`components/Values.tsx`）
- **Work** — つくったもの（`components/Work.tsx`）
- **スキル** — Skills & 経歴（`components/Skills.tsx`）

掲載内容（プロフィール・Work・スキル・経歴・大事にしていること）はすべて
`lib/data.ts` に集約しているので、ここを編集すれば各セクションに反映されます。

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
