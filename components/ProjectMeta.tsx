// プロジェクトのメタ情報（年 + 区切り線 + タグ）。Work カードと詳細ページで共用
export default function ProjectMeta({
  year,
  tags,
  className = "",
}: {
  year: string;
  tags: string[];
  className?: string;
}) {
  return (
    <div
      className={`flex flex-wrap items-center gap-3 text-xs tracking-wide text-[var(--color-muted)] ${className}`}
    >
      <span>{year}</span>
      <span className="h-px w-4 bg-[var(--color-line)]" />
      <span className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </span>
    </div>
  );
}
