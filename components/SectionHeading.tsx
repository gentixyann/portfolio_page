import Reveal from "./Reveal";

type Props = {
  no?: string;
  title: string;
};

// 各セクション共通の見出し（番号 + 英語タイトル）
export default function SectionHeading({ no, title }: Props) {
  return (
    <Reveal className="mb-12 md:mb-20">
      <div className="flex items-center gap-4">
        {no && (
          <span className="text-sm font-medium tracking-widest text-[var(--color-muted)]">
            {no}
          </span>
        )}
        <span className="h-px flex-1 bg-[var(--color-line)]" />
      </div>
      <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
        {title}
      </h2>
    </Reveal>
  );
}
