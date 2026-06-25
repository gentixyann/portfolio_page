import Link from "next/link";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import WorkCard from "./WorkCard";
import { projects } from "@/lib/data";

export default function Work() {
  // トップでは PC=4カラム×最大4行（16件）まで抜粋し、全件は /work へ
  const featured = projects.slice(0, 16);

  return (
    <section id="work" className="mx-auto max-w-[var(--container)] px-6 py-24 md:py-36">
      <SectionHeading no="02" title="Work & Project" />

      <ul className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4 md:gap-x-6 md:gap-y-12">
        {featured.map((p, i) => (
          <Reveal as="li" key={p.slug} delay={(i % 4) * 80}>
            <WorkCard project={p} />
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-16">
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] px-6 py-3 text-sm font-medium transition-colors hover:bg-[var(--color-ink)] hover:text-[var(--color-bg)]"
        >
          全ての Work を見る（{projects.length}）
          <span className="transition-transform duration-200 group-hover:translate-x-0.5">
            →
          </span>
        </Link>
      </Reveal>
    </section>
  );
}
