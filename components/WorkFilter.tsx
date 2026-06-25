"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import WorkCard from "./WorkCard";
import { CATEGORIES, projects, type Category } from "@/lib/data";

const FILTERS = ["All", ...CATEGORIES] as const;
type Filter = (typeof FILTERS)[number];

export default function WorkFilter() {
  const [active, setActive] = useState<Filter>("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(active as Category));

  return (
    <div>
      {/* フィルタタブ */}
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((f) => {
          const isActive = active === f;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-bg)]"
                  : "border-[var(--color-line)] text-[var(--color-muted)] hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      {/* 件数 */}
      <p className="mt-6 text-xs tracking-widest text-[var(--color-muted)]">
        {filtered.length} works
      </p>

      {/* グリッド（key に active を含めてフィルタ切替時に再アニメーション） */}
      <ul className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4 md:gap-x-6 md:gap-y-12">
        {filtered.map((p, i) => (
          <Reveal as="li" key={`${active}-${p.slug}`} delay={(i % 4) * 80}>
            <WorkCard project={p} />
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
