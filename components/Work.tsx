import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ProjectMeta from "./ProjectMeta";
import { projects } from "@/lib/data";

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-[var(--container)] px-6 py-24 md:py-36">
      <SectionHeading no="02" en="Work" ja="つくったもの" />

      <ul className="grid gap-x-8 gap-y-16 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal as="li" key={p.slug} delay={(i % 2) * 100}>
            <Link href={`/work/${p.slug}`} className="group block">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[var(--color-surface)] ring-1 ring-[var(--color-line)]">
                <Image
                  src={p.images[0]}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 560px"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
              </div>

              <ProjectMeta year={p.year} tags={p.tags} className="mt-5" />

              <h3 className="mt-2 flex items-center gap-2 text-xl font-semibold tracking-tight md:text-2xl">
                {p.title}
                <span className="text-base text-[var(--color-muted)] transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                {p.description}
              </p>
            </Link>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
