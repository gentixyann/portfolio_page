// サイト全体のコンテンツ定義。文言・データはここを編集すれば各セクションに反映されます。

export type SocialLink = {
  name: string;
  url: string;
};

export type Value = {
  no: string;
  title: string;
  body: string;
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  description: string;
  images: string[]; // 1枚目をカードのサムネイルに使用
  url: string; // 外部リンク（詳細ページ内のリンク先）
  tags: string[];
};

export type Skill = {
  name: string;
  level: number; // 0-100
};

export type Career = {
  company: string;
  role: string;
  period: string;
  stack: string[];
};

export const profile = {
  name: "Gento",
  role: "App / Frontend Developer",
  // トップに置くキャッチコピー
  catch: ["体験を、", "つくる。"],
  // 自己紹介（短文）
  lead: "Flutter でのアプリ開発を軸に、Angular / React / Vue(Nuxt) でフロントエンド、Laravel でバックエンド、Figma でデザインまで。スタートアップで幅広い技術を必要に応じて習得してきました。",
  bio: "大阪出身。エストニアの電子国民「e-Residency」。🇯🇵日本と🇳🇿NZのゲストハウスで計3年ほど住み込みスタッフを経験。屋内版 Google ストリートビューの制作をきっかけに web 制作を始め、後にアプリ開発へ。イベントの企画やディレクションもときどき手がけます。",
  social: [
    { name: "GitHub", url: "https://github.com/gentixyann" },
    { name: "Facebook", url: "https://www.facebook.com/gentiiin/" },
    { name: "Qiita", url: "https://qiita.com/kokogento" },
  ] as SocialLink[],
  image: "/images/myProfile.jpg",
};

// 大事にしていること（新規セクション。内容は自由に書き換えてください）
export const values: Value[] = [
  {
    no: "01",
    title: "領域を越えて学ぶ",
    body: "アプリ・フロント・バックエンド・デザイン。必要なら職種や技術の境界を越えて手を動かす。スタートアップで培った「まず作って確かめる」姿勢を大切にしています。",
  },
  {
    no: "02",
    title: "体験そのものを設計する",
    body: "アプリもイベントも、突き詰めれば「人がどう感じるか」。機能の先にある体験までを見据えて、企画から実装までを一貫して考えます。",
  },
  {
    no: "03",
    title: "カオスを面白がる",
    body: "海外のゲストハウス暮らしやインド発のイベント制作で学んだのは、想定外を楽しむ力。型にはまらない発想を、形にすることを楽しんでいます。",
  },
];

export const projects: Project[] = [
  {
    slug: "indofullness",
    title: "マ！？インドフルネス",
    year: "2024",
    description:
      "インドの持つカオスな世界観からヒントを得た、自己から意識を逸らす体験イベントを企画・制作。疑似体験できる web アプリの開発も担当。",
    images: [
      "/images/portfolio/indofullness/indofullness_overview.png",
      "/images/portfolio/indofullness/indofullness_logo.png",
    ],
    url: "https://indofullness.moteasobu.jp/",
    tags: ["企画", "Web App"],
  },
  {
    slug: "call-from-india",
    title: "インドからの電話",
    year: "2023",
    description:
      "突然インドから電話がかかってきて、指示に従いストーリーを進める没入型体験コンテンツ。企画・脚本・運営の一部を担当。運営面ではターゲットを監視し、電話係とキャストに指示を出す「連絡係」を担当した。",
    images: [
      "/images/portfolio/call-from-india/call-from-india1.png",
      "/images/portfolio/call-from-india/call-from-india2.jpg",
    ],
    url: "https://note.com/moteasobu3ch/n/ned26ce391aa9",
    tags: ["企画", "脚本", "運営"],
  },
  {
    slug: "motemagedon",
    title: "モテマゲドン",
    year: "2023",
    description:
      "いわゆる「フィーリングカップル」アプリ。合コンなどの出会いの場に、もっと繋がるきっかけを作ります。",
    images: [
      "/images/portfolio/motemagedon/6.5inch.001.png",
      "/images/portfolio/motemagedon/splash_screen.001.png",
    ],
    url: "https://motemagedon.web.app/",
    tags: ["Flutter"],
  },
  {
    slug: "community-undoukai",
    title: "コミュニティシャッフル運動会",
    year: "2022",
    description:
      "あらゆるコミュニティを一同に集めた大運動会を共同主催。運営メンバーとして企画・営業・クラファンのデザインを担当。",
    images: [
      "/images/portfolio/undoukai/undoukai1.png",
      "/images/portfolio/undoukai/undoukai2.jpg",
    ],
    url: "https://note.com/moteasobu3ch/n/nbea2f47d8201",
    tags: ["企画", "デザイン"],
  },
  {
    slug: "nurse-be",
    title: "Nurse-be（ベータ版）",
    year: "2021",
    description:
      "ナースに特化したメンタルサポートサービス。医療者やイラストレーターなど他業種のメンバーと共に開発。",
    images: [
      "/images/portfolio/photography/p1.png",
      "/images/portfolio/photography/p2.png",
    ],
    url: "https://base-core-check.web.app/",
    tags: ["Nuxt", "TypeScript", "Firebase"],
  },
  {
    slug: "seikatsu-calendar",
    title: "性活カレンダー",
    year: "2020",
    description: "性活を記録するアプリ。地味に毎月数百円の収益あり。",
    images: [
      "/images/portfolio/animal-shelter/5.5inch.001.png",
      "/images/portfolio/animal-shelter/happy-man.jpg",
    ],
    url: "https://hcalendar-7c1f4.web.app/",
    tags: ["Angular", "Ionic", "Firebase"],
  },
  {
    slug: "qiita",
    title: "Qiita",
    year: "2019",
    description: "プログラミングに関する知見を発信。",
    images: [
      "/images/portfolio/adventure/qiita.png",
      "/images/portfolio/adventure/p2.png",
    ],
    url: "https://qiita.com/kokogento",
    tags: ["Angular", "TypeScript", "Flutter"],
  },
];

// slug からプロジェクトを取得
export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const skills: Skill[] = [
  { name: "TypeScript", level: 90 },
  { name: "Flutter", level: 85 },
  { name: "Laravel", level: 85 },
  { name: "Firebase", level: 85 },
  { name: "Next.js", level: 80 },
  { name: "Angular", level: 80 },
  { name: "Nuxt", level: 80 },
  { name: "Docker", level: 75 },
  { name: "JavaScript", level: 70 },
  { name: "MySQL", level: 60 },
];

export const careers: Career[] = [
  {
    company: "GREFF Co., Ltd.",
    role: "Full-Stack Developer",
    period: "2021.09 - present",
    stack: ["Flutter", "Laravel", "Vue", "AWS", "Firebase", "MySQL"],
  },
  {
    company: "SMHC Co., Ltd.",
    role: "Mobile App Developer (Cross Platform)",
    period: "2020.08 - 2021.08",
    stack: ["Vue", "Cordova", "Laravel", "JavaScript"],
  },
  {
    company: "個人事業主",
    role: "Web Designer",
    period: "2018.08 -",
    stack: ["HTML/CSS", "JavaScript", "WordPress", "Nuxt"],
  },
];
