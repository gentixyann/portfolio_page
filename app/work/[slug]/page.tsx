import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ProjectMeta from "@/components/ProjectMeta";
import { projects, getProject } from "@/lib/data";

// 静的エクスポート用：全プロジェクトのページを事前生成
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Work — Gento" };
  return {
    title: `${project.title} — Work | Gento`,
    description: project.description,
  };
}

export default async function WorkDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  // 前後のプロジェクト（ナビゲーション用）
  const index = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <Header />
      <main className="mx-auto max-w-[var(--container)] px-6 pt-28 pb-24 md:pt-36 md:pb-36">
        <Reveal>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-1">
              ←
            </span>
            Work 一覧へ
          </Link>
        </Reveal>

        <Reveal delay={60}>
          <ProjectMeta year={project.year} tags={project.tags} className="mt-10" />
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            {project.title}
          </h1>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
            {project.description}
          </p>
        </Reveal>

        <Reveal delay={160}>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-7 py-3 text-sm font-medium text-[var(--color-bg)] transition-opacity hover:opacity-85"
          >
            サイトを見る
            <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </a>
        </Reveal>

        {/* 画像ギャラリー */}
        <div className="mt-16 space-y-6 md:mt-20 md:space-y-8">
          {project.images.map((src, i) => (
            <Reveal key={src} delay={i * 80}>
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[var(--color-surface)] ring-1 ring-[var(--color-line)]">
                <Image
                  src={src}
                  alt={`${project.title} ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 1152px"
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            </Reveal>
          ))}
        </div>

        {/* 前後ナビゲーション */}
        <nav className="mt-20 flex items-center justify-between border-t border-[var(--color-line)] pt-8 text-sm md:mt-28">
          <Link
            href={`/work/${prev.slug}`}
            className="group flex flex-col gap-1 text-left"
          >
            <span className="text-xs text-[var(--color-muted)]">← Prev</span>
            <span className="font-medium transition-colors group-hover:text-[var(--color-muted)]">
              {prev.title}
            </span>
          </Link>
          <Link
            href={`/work/${next.slug}`}
            className="group flex flex-col gap-1 text-right"
          >
            <span className="text-xs text-[var(--color-muted)]">Next →</span>
            <span className="font-medium transition-colors group-hover:text-[var(--color-muted)]">
              {next.title}
            </span>
          </Link>
        </nav>
      </main>
      <Footer />
    </>
  );
}
