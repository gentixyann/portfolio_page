import Image from "next/image";
import Link from "next/link";
import ProjectMeta from "./ProjectMeta";
import { type Project } from "@/lib/data";

// Work 一覧カード（トップの Work セクションと /work ページで共用）
export default function WorkCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-[var(--color-surface)] ring-1 ring-[var(--color-line)]">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 50vw, 280px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>

      <ProjectMeta
        year={project.year}
        tags={project.categories}
        className="mt-3"
      />

      <h3 className="mt-2 flex items-center gap-1.5 text-sm font-semibold tracking-tight md:text-base">
        {project.title}
        <span className="text-xs text-[var(--color-muted)] transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </h3>

      <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-[var(--color-muted)]">
        {project.description}
      </p>

      <div className="mt-2.5 flex flex-wrap gap-1.5">
        {project.roles.map((r) => (
          <span
            key={r}
            className="rounded-full border border-[var(--color-line)] px-2.5 py-0.5 text-[11px] text-[var(--color-muted)]"
          >
            {r}
          </span>
        ))}
      </div>
    </Link>
  );
}
