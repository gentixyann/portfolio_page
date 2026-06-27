import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)]">
      <div className="mx-auto flex max-w-[var(--container)] items-center justify-between px-6 py-10 text-xs text-[var(--color-muted)]">
        <span>© {profile.name}</span>
        <a href="/" className="transition-colors hover:text-[var(--color-ink)]">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
