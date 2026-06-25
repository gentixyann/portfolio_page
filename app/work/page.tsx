import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import WorkFilter from "@/components/WorkFilter";

export const metadata: Metadata = {
  title: "Work | Gento",
  description: "Gento がこれまでに手がけたアプリ・Webサービス・イベント・コミュニティの一覧。",
};

export default function WorkIndex() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[var(--container)] px-6 pt-28 pb-24 md:pt-36 md:pb-36">
        <SectionHeading title="Work & Project" />
        <WorkFilter />

        <div className="mt-20 border-t border-[var(--color-line)] pt-8">
          <Link
            href="/"
            className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
          >
            ← Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
