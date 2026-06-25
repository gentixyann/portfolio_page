import Reveal from "./Reveal";

type Props = {
  no: string;
  en: string;
  ja: string;
};

// 各セクション共通の見出し（番号 + 英語ラベル + 日本語タイトル）
export default function SectionHeading({ no, en, ja }: Props) {
  return (
    <Reveal className="mb-12 md:mb-20">
      <div className="flex items-baseline gap-4">
        <span className="text-sm font-medium tracking-widest text-[var(--color-muted)]">
          {no}
        </span>
        <span className="h-px flex-1 bg-[var(--color-line)]" />
        <span className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-muted)]">
          {en}
        </span>
      </div>
      <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-5xl">
        {ja}
      </h2>
    </Reveal>
  );
}
