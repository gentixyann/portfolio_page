import Image from "next/image";
import Reveal from "./Reveal";
import SocialLinks from "./SocialLinks";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[100svh] max-w-[var(--container)] flex-col justify-center px-6 pt-28 pb-20 md:pt-32"
    >
      <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
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

          <Reveal delay={160}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
              {profile.lead}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <SocialLinks className="mt-10" />
          </Reveal>
        </div>

        <Reveal delay={200} className="justify-self-center md:justify-self-end">
          <div className="relative h-56 w-56 overflow-hidden rounded-full md:h-72 md:w-72">
            <Image
              src={profile.image}
              alt={profile.name}
              fill
              priority
              sizes="(max-width: 768px) 224px, 288px"
              className="object-cover"
            />
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
