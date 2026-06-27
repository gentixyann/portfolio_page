import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SocialLinks from "./SocialLinks";
import { profile } from "@/lib/data";

export default function Profile() {
  return (
    <section id="profile" className="mx-auto max-w-[var(--container)] px-6 py-24 md:py-36">
      <SectionHeading no="04" title="Profile" />

      <div className="grid items-start gap-10 md:grid-cols-[auto_1fr] md:gap-14">
        <Reveal className="flex flex-col items-center gap-6 justify-self-center md:justify-self-start">
          <div className="relative h-44 w-44 overflow-hidden rounded-full md:h-56 md:w-56">
            <Image
              src={profile.image}
              alt={profile.name}
              fill
              sizes="(max-width: 768px) 176px, 224px"
              className="object-cover"
            />
          </div>
          <SocialLinks />
        </Reveal>

        <div className="max-w-2xl space-y-6">
          <Reveal>
            <p className="text-base leading-relaxed text-[var(--color-ink)] md:text-lg">
              {profile.lead}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-base leading-relaxed text-[var(--color-muted)]">
              {profile.bio}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
