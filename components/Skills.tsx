import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skills, careers } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-[var(--container)] px-6 py-24 md:py-36">
      <SectionHeading no="03" en="Skills" ja="スキル" />

      <div className="grid gap-16 md:grid-cols-2 md:gap-20">
        {/* スキル一覧 */}
        <ul className="space-y-6">
          {skills.map((s, i) => (
            <Reveal as="li" key={s.name} delay={i * 50}>
              <div className="flex items-baseline justify-between">
                <span className="text-base font-medium">{s.name}</span>
                <span className="text-xs tracking-widest text-[var(--color-muted)]">
                  {s.level}
                </span>
              </div>
              <div className="mt-2 h-px w-full bg-[var(--color-line)]">
                <div
                  className="h-px bg-[var(--color-ink)]"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </Reveal>
          ))}
        </ul>

        {/* 経歴 */}
        <div>
          <Reveal>
            <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--color-muted)]">
              Experience
            </h3>
          </Reveal>
          <ul className="mt-8 space-y-10">
            {careers.map((c, i) => (
              <Reveal as="li" key={c.company} delay={i * 80}>
                <p className="text-xs tracking-widest text-[var(--color-muted)]">
                  {c.period}
                </p>
                <p className="mt-1 text-lg font-semibold tracking-tight">
                  {c.company}
                </p>
                <p className="text-sm text-[var(--color-muted)]">{c.role}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {c.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[var(--color-line)] px-3 py-1 text-xs text-[var(--color-muted)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
