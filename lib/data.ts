// サイト全体のコンテンツ定義。文言・データはここを編集すれば各セクションに反映されます。

// public/images 配下のディレクトリ一覧（dev/build 前に自動生成される）。
// images に末尾スラッシュ付きのディレクトリパスを書くと、その中の全画像に展開されます。
import imageManifest from "./imageManifest.json";

const manifest = imageManifest as Record<string, string[]>;

// images の各エントリを展開する。
// "/images/portfolio/foo/" のような末尾スラッシュ付きはフォルダ内の全画像に、
// それ以外は通常の画像パスとしてそのまま使う。
function expandImages(images: string[]): string[] {
  return images.flatMap((entry) =>
    entry.endsWith("/") ? manifest[entry] ?? [] : [entry]
  );
}

export type SocialLink = {
  name: string;
  url: string;
};

export type Value = {
  no: string;
  title: string;
  body: string;
};

// Work のフィルタ用カテゴリ（フィルタタブにこの順で表示）
export const CATEGORIES = ["App", "Web Service", "Event", "Community", "Other"] as const;
export type Category = (typeof CATEGORIES)[number];

export type ProjectLink = {
  url: string;
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  description: string;
  categories: Category[]; // 一覧のフィルタリング用タグ
  roles: string[]; // 詳細ページの「Role」セクションに表示する役割
  links: ProjectLink[]; // 詳細ページの「Links」セクションに表示する外部リンク
  images: string[]; // 画像パスの配列。1枚目をカードのサムネイルに使用
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

// 副業・業務委託（期間表記なし。案件名と内容を箇条書きで並べる）
export type SideWork = {
  name: string; // 会社名 / 案件名
  description: string; // 役割・内容
  url?: string; // 関連リンク（任意。description の下に表示）
};

export const profile = {
  name: "Gento",
  // トップのキャッチコピー上に置く一言（顧客の体験のために開発する、の意）
  role: "Building for your experience",
  // トップに置くキャッチコピー
  catch: ["体験を、", "つくる。"],
  // 自己紹介（短文）
  lead: "Flutter でのアプリ開発を軸に、Angular / Next / Nuxt でフロントエンド、Laravel でバックエンド、Figma でデザインまで。スタートアップで幅広い技術を必要に応じて習得してきました。",
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
    body: "海外のゲストハウスやシェアハウス暮らし、イベント企画で学んだのは、想定外を楽しむ力。トラブルや予期せぬ出来事を楽しんでいます。",
  },
];

const rawProjects: Project[] = [
  {
    slug: "bar_open",
    title: "バー・オープン公式サイト",
    year: "2026",
    categories: ["Community"],
    description:
      "合同会社ケムリキカクで共同運営する札幌のコミュニティー・バーの公式サイトを制作。p5.jsを使ったアニメーションで人の流れを糸に見立て、絡まり交わり合うようなイメージでBarの世界観を演出。",
    images: ["/images/portfolio/bar_open/"],
    roles: ["運営",],
    links: [{ url: "https://bar-open.pages.dev/" }],
  },
  {
    slug: "urban_jungle",
    title: "アーバンジャングル",
    year: "2024",
    categories: ["Community"],
    description:
      "合同会社ケムリキカクを共同創業し、空き家を活用しシェアハウス・民泊・飲食・イベントスペースが一体となった複合施設「アーバンジャングル」を立ち上げ運営メンバーとして参画。立ち上げ時のクラウドファンディングで230万円を調達。",
    images: ["/images/portfolio/urban_jungle/"],
    roles: ["運営",],
    links: [{ url: "https://camp-fire.jp/projects/764474/view" }],
  },
  {
    slug: "indofullness",
    title: "マ！？インドフルネス Web App",
    year: "2024",
    categories: ["Web Service"],
    description:
      "インドの持つカオスな世界観からヒントを得た、自己から意識を逸らすインドフルネスを疑似体験できる web アプリを開発",
    images: ["/images/portfolio/indofullness/"],
    roles: ["デザイン", "開発"],
    links: [{ url: "https://indofullness.moteasobu.jp/" }],
  },
  {
    slug: "indofullness_event",
    title: "マ！？インドフルネス",
    year: "2024",
    categories: ["Event"],
    description:
      "インドの持つカオスな世界観からヒントを得た、自己から意識を逸らす体験イベントの企画・制作に従事。設営から協力メンバーのマネジメントまで幅広く担当。",
    images: [
      "/images/portfolio/indofullness_event/",
    ],
    roles: ["企画", "イベント運営"],
    links: [{ url: "https://100banch.com/nanananasai2024-assassin-from-india" }],
  },
  {
    slug: "call-from-india",
    title: "インドからの電話",
    year: "2023",
    categories: ["Event"],
    description:
      "突然インドから電話がかかってきて、指示に従いストーリーを進める没入型体験コンテンツ。企画・脚本・運営の一部を担当。運営面ではターゲットを監視し、電話係とキャストに指示を出す「連絡係」を担当した。",
    images: ["/images/portfolio/call-from-india/"],
    roles: ["企画", "脚本", "運営"],
    links: [{ url: "https://note.com/moteasobu3ch/n/ned26ce391aa9" }],
  },
  {
    slug: "motemagedon",
    title: "モテマゲドン",
    year: "2023",
    categories: ["App"],
    description:
      "いわゆる「フィーリングカップル」アプリ。合コンなどの出会いの場に、もっと繋がるきっかけを作ります。",
    images: ["/images/portfolio/motemagedon/"],
    roles: ["企画", "開発", "デザイン"],
    links: [{ url: "https://motemagedon.web.app/" }],
  },
  {
    slug: "community-undoukai",
    title: "コミュニティシャッフル運動会",
    year: "2022",
    categories: ["Community", "Event"],
    description:
      "あらゆるコミュニティを一同に集めた大運動会を共同主催。運営メンバーとして企画・営業・クラファンのデザインを担当。",
    images: ["/images/portfolio/undoukai/"],
    roles: ["企画", "営業", "デザイン", "運営"],
    links: [{ url: "https://note.com/moteasobu3ch/n/nbea2f47d8201" }],
  },
  {
    slug: "seikatsu-calendar",
    title: "性活カレンダー",
    year: "2020",
    categories: ["App"],
    description: "性活を記録するアプリ。地味に毎月数百円の収益あり。",
    images: ["/images/portfolio/seikatsu-calendar/"],
    roles: ["企画", "開発", "デザイン"],
    links: [{ url: "https://hcalendar-7c1f4.web.app/" }],
  },
  {
    slug: "qiita",
    title: "Qiita",
    year: "2019",
    categories: ["Other"],
    description: "プログラミングに関する知見を発信。",
    images: ["/images/portfolio/adventure/"],
    roles: ["執筆"],
    links: [{ url: "https://qiita.com/kokogento" }],
  },
];

// images のディレクトリ指定をフォルダ内の全画像に展開した最終的なプロジェクト一覧
export const projects: Project[] = rawProjects.map((p) => ({
  ...p,
  images: expandImages(p.images),
}));

// slug からプロジェクトを取得
export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const skills: Skill[] = [
  { name: "Flutter", level: 90 },
  { name: "Laravel", level: 85 },
  { name: "Firebase", level: 85 },
  { name: "Next.js", level: 80 },
  { name: "Nuxt", level: 80 },
  { name: "Docker", level: 75 },
  { name: "Angular", level: 70 },
  { name: "MySQL", level: 65 },
];

export const careers: Career[] = [
  {
    company: "GREFF Co., Ltd.",
    role: "Full-Stack Developer",
    period: "2021.09 - 2024.06",
    stack: ["Flutter", "Laravel", "Next.js", "AWS", "Firebase", "MySQL", "Docker"],
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
    stack: ["HTML/CSS", "JavaScript", "WordPress", "Figma"],
  },
];

// 副業・業務委託の案件一覧（内容は実際のものに書き換えてください）
export const sideWork: SideWork[] = [
  {
    name: "株式会社Plusbase",
    description: "創業前フェーズの一人目のエンジニアとして参画。プロダクトビジョン策定からプロダクト開発を代表・医療従事者と共に推進。",
    url: "https://prtimes.jp/main/html/rd/p/000000003.000097455.html",
  },
  {
    name: "合同会社モテアソブ三軒茶屋",
    description: "イベント企画・Web制作を行う会社。共同創業者として参画し、Web制作・イベント企画・運営を担当。",
    url: "https://moteasobu.jp/member/page/gento",
  },
  {
    name: "Imaginext,Inc.",
    description: "Web サイトのデザイン・制作と、や屋内版Googleストリートビュー制作を担当。",
  },
];
