import Reveal from "./Reveal";
import HeroSketch from "./HeroSketch";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[100svh] max-w-[var(--container)] flex-col justify-center px-6 pt-28 pb-20 md:pt-32"
    >
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <Reveal>
            <p className="text-sm uppercase tracking-[0.25em] text-[var(--color-muted)]">
              {profile.role}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-6xl font-semibold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
              {profile.catch.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </Reveal>
        </div>

        {/* ジェネラティブスケッチ（PCは右側、スマホはキャッチコピーの上に表示） */}
        <Reveal delay={200} className="order-first md:order-none">
          <div className="mx-auto aspect-square w-full max-w-sm md:max-w-none">
            <HeroSketch />
          </div>
        </Reveal>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center">
        <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
          Scroll
        </span>
      </div>
    </section>
  );
}
