"use client";

import { useEffect, useRef } from "react";

/**
 * トップ（Hero）の右側に配置するジェネラティブなスケッチ。
 * ノイズで揺らぐブロブの輪郭に沿ってテキストが回り込み、マウスを追従する。
 *
 * Original code by Vamoss — https://openprocessing.org/sketch/697891
 * (instance mode へ移植し、コンテナサイズ・配色をサイトに合わせて調整)
 */
export default function HeroSketch() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let cancelled = false;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let instance: any;

    (async () => {
      const p5 = (await import("p5")).default;
      if (cancelled || !el) return;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const sketch = (s: any) => {
        const textToWrite = "FOR THE PEOPLE";
        const SEGMENTS = 5;

        let centerX: number;
        let centerY: number;
        let INNER_RADIUS: number;
        let RADIUS_VARIATION: number;

        const w = () => el.clientWidth;
        const h = () => el.clientHeight;

        function configure() {
          centerX = s.width / 2;
          centerY = s.height / 2;

          const screenPct = Math.min(s.height, s.width) / 1000;
          const fontSize = screenPct * 150;
          INNER_RADIUS = screenPct * 170;
          // 輪郭の揺れ幅（最大サイズが大きくなりすぎないよう抑えめに）
          RADIUS_VARIATION = screenPct * 250;

          s.textFont("Helvetica");
          s.textSize(fontSize);
        }

        // 円周ノイズ（完全ループ）— @GoToLoop のコードを移植
        function pointForIndex(pct: number) {
          const NOISE_SCALE = 5;
          const angle = pct * s.TWO_PI;
          const cosAngle = s.cos(angle);
          const sinAngle = s.sin(angle);
          // ノイズの時間進行を速めて、輪郭の変形をよりダイナミックに
          const time = s.frameCount / 55;
          const noiseValue = s.noise(
            NOISE_SCALE * cosAngle + NOISE_SCALE,
            NOISE_SCALE * sinAngle + NOISE_SCALE,
            time
          );
          // 全体が伸縮する「呼吸」のような演出（±約15%のサイズ変化）
          const pulse = 1 + 0.15 * s.sin(s.frameCount / 45);
          const radius = (INNER_RADIUS + RADIUS_VARIATION * noiseValue) * pulse;
          return {
            x: radius * cosAngle + centerX,
            y: radius * sinAngle + centerY,
          };
        }

        s.setup = () => {
          s.createCanvas(w(), h());
          configure();
        };

        s.windowResized = () => {
          s.resizeCanvas(w(), h());
          configure();
        };

        s.draw = () => {
          s.clear(); // 背景は透過（サイトのオフホワイトを活かす）
          s.fill(26, 26, 24); // サイトのインク色
          s.noStroke();

          // ブロブ本体
          s.beginShape();
          for (let i = 0; i < SEGMENTS; i++) {
            const p0 = pointForIndex(i / SEGMENTS);
            s.vertex(p0.x, p0.y);
          }
          s.endShape(s.CLOSE);

          // 輪郭に沿ってテキストを配置（マウス追従）
          let pct = s.atan2(s.mouseY - centerY, s.mouseX - centerX) / s.TWO_PI;
          const pixToAngularPct =
            1 / ((INNER_RADIUS + RADIUS_VARIATION / 2) * s.TWO_PI);

          for (let i = 0; i < textToWrite.length; i++) {
            const charWidth = s.textWidth(textToWrite.charAt(i));
            pct += (charWidth / 2) * pixToAngularPct;

            const leftP = pointForIndex(pct - 0.01);
            const rightP = pointForIndex(pct + 0.01);
            const angle =
              s.atan2(leftP.y - rightP.y, leftP.x - rightP.x) + s.PI;

            s.push();
            const p = pointForIndex(pct);
            s.translate(p.x, p.y);
            s.rotate(angle);
            s.translate(-p.x, -p.y);
            s.text(textToWrite.charAt(i), p.x - charWidth / 2, p.y);
            s.pop();

            pct += (charWidth / 2) * pixToAngularPct;
          }
        };
      };

      instance = new p5(sketch, el);
    })();

    return () => {
      cancelled = true;
      instance?.remove();
    };
  }, []);

  return <div ref={containerRef} className="h-full w-full" aria-hidden="true" />;
}
