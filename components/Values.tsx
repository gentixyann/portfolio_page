import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { values, profile } from "@/lib/data";

export default function Values() {
  return (
    <section id="values" className="mx-auto max-w-[var(--container)] px-6 py-24 md:py-36">
      <SectionHeading no="01" title="Values" />

      <Reveal className="mb-16 max-w-2xl">
        <p className="text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
          {profile.bio}
        </p>
      </Reveal>

      <ul className="grid gap-px overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-line)] md:grid-cols-3">
        {values.map((v, i) => (
          <Reveal
            as="li"
            key={v.no}
            delay={i * 100}
            className="flex flex-col bg-[var(--color-bg)] p-8 md:p-10"
          >
            <span className="text-sm font-medium tracking-widest text-[var(--color-muted)]">
              {v.no}
            </span>
            <h3 className="mt-6 text-xl font-semibold tracking-tight md:text-2xl">
              {v.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
              {v.body}
            </p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
