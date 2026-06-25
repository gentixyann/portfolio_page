import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
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

// 外部リンクアイコン
function ExternalIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 shrink-0"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

// 「Role」「Links」共通のラベル
function MetaLabel({ children }: { children: React.ReactNode }) {
  return (
    <dt className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
      {children}
    </dt>
  );
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
      {/* catnose.me 風の狭い中央カラム（記事レイアウト） */}
      <main className="mx-auto max-w-2xl px-6 pt-28 pb-24 md:pt-36 md:pb-36">
        <Reveal>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
          >
            ← Work
          </Link>
        </Reveal>

        <Reveal delay={60}>
          <p className="mt-10 text-xs tracking-widest text-[var(--color-muted)]">
            {project.year}
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            {project.title}
          </h1>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-6 text-base leading-relaxed text-[var(--color-muted)]">
            {project.description}
          </p>
        </Reveal>

        {/* Role / Links */}
        <Reveal delay={160}>
          <dl className="mt-10 grid gap-8 border-y border-[var(--color-line)] py-8 sm:grid-cols-2">
            <div>
              <MetaLabel>Role</MetaLabel>
              <dd className="mt-3 flex flex-wrap gap-2">
                {project.roles.map((r) => (
                  <span
                    key={r}
                    className="rounded-full border border-[var(--color-line)] px-3 py-1 text-xs text-[var(--color-muted)]"
                  >
                    {r}
                  </span>
                ))}
              </dd>
            </div>

            <div>
              <MetaLabel>Links</MetaLabel>
              <dd className="mt-3 flex flex-col gap-2 text-sm">
                {project.links.map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex w-fit items-center gap-1.5 font-medium transition-colors hover:text-[var(--color-muted)]"
                  >
                    {l.label}
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ExternalIcon />
                    </span>
                  </a>
                ))}
              </dd>
            </div>
          </dl>
        </Reveal>

        {/* 画像：本文幅に収め、ブラウザが実寸比のまま自動表示（寸法指定・トリミングなし） */}
        <div className="mt-12 space-y-6 md:mt-16">
          {project.images.map((src, i) => (
            <Reveal key={src} delay={i * 80}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`${project.title} ${i + 1}`}
                loading={i === 0 ? "eager" : "lazy"}
                className="h-auto w-full rounded-xl ring-1 ring-[var(--color-line)]"
              />
            </Reveal>
          ))}
        </div>

        {/* 前後ナビゲーション */}
        <nav className="mt-16 flex items-center justify-between border-t border-[var(--color-line)] pt-8 text-sm md:mt-20">
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
