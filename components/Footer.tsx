import Reveal from "./Reveal";
import SocialLinks from "./SocialLinks";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)]">
      <div className="mx-auto max-w-[var(--container)] px-6 py-20 md:py-28">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.25em] text-[var(--color-muted)]">
            Contact
          </p>
          <p className="mt-6 text-3xl font-semibold tracking-tight md:text-5xl">
            お気軽にどうぞ。
          </p>
          <SocialLinks className="mt-10" />
        </Reveal>

        <div className="mt-20 flex items-center justify-between text-xs text-[var(--color-muted)]">
          <span>© {profile.name}</span>
          <a href="/" className="hover:text-[var(--color-ink)]">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
