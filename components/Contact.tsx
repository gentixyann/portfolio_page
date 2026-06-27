"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/**
 * Web3Forms の Access Key。
 * https://web3forms.com/ で「a551.return@gmail.com」を登録して発行し、下の値を差し替えてください。
 * （このキーは公開しても安全な設計です。送信先メールを変更しない限り悪用できません）
 */
const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "YOUR_WEB3FORMS_ACCESS_KEY";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setErrorMessage("");

    const formData = new FormData(form);
    formData.append("access_key", ACCESS_KEY);
    formData.append("subject", "ポートフォリオサイトからのお問い合わせ");
    formData.append("from_name", "Portfolio Contact");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(json.message ?? "送信に失敗しました。");
      }
    } catch {
      setStatus("error");
      setErrorMessage("通信エラーが発生しました。時間をおいて再度お試しください。");
    }
  }

  const inputClass =
    "w-full rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-3 text-base outline-none transition-colors focus:border-[var(--color-ink)]";
  const labelClass =
    "mb-2 block text-xs uppercase tracking-[0.15em] text-[var(--color-muted)]";

  return (
    <section
      id="contact"
      className="mx-auto max-w-[var(--container)] px-6 py-24 md:py-36"
    >
      <SectionHeading no="05" title="Contact" />

      <div className="mx-auto max-w-xl space-y-10">
        <Reveal>
          <p className="text-center text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
            お仕事のご相談・ご依頼、その他お問い合わせはこちらのフォームからお気軽にどうぞ。
            内容を確認のうえ、ご返信いたします。
          </p>
        </Reveal>

        <Reveal delay={100}>
          {status === "success" ? (
            <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8 text-center">
              <p className="text-xl font-semibold tracking-tight">
                送信しました 🙌
              </p>
              <p className="mt-3 text-sm text-[var(--color-muted)]">
                お問い合わせありがとうございます。内容を確認のうえご連絡いたします。
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm font-medium underline underline-offset-4 transition-colors hover:text-[var(--color-muted)]"
              >
                続けて送信する
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* ボット対策（人間には見えないハニーポット） */}
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div>
                <label htmlFor="name" className={labelClass}>
                  お名前
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className={inputClass}
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  メールアドレス
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={inputClass}
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  お問い合わせ内容
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className={`${inputClass} resize-y`}
                  placeholder="ご用件をご記入ください"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-600">{errorMessage}</p>
              )}

              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-8 py-3 text-sm font-medium text-[var(--color-bg)] transition-opacity hover:opacity-85 disabled:opacity-50"
                >
                  {status === "sending" ? "Sending…" : "Send"}
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
