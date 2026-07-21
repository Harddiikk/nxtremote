"use client";

import { useEffect, useRef } from "react";

/**
 * Ambient background: a faint, slowly drifting field of code / marketing
 * glyphs behind the page content. Deliberately low-opacity so it enriches
 * open areas (hero, globe, CTA) without disturbing white content sections,
 * which sit on top of it. Honors prefers-reduced-motion.
 */
const GLYPHS = [
  "{", "}", "</>", "%", "+", "#", "$", "▲", "●", "◇", "↗", "✦", "//",
  "SEO", "ROAS", "CTR", "LTV", "A/B", "∿", "→", "≈", "01",
];

const VIOLET = [79, 47, 229];
const CYAN = [9, 180, 228];

type P = {
  x: number; y: number; vy: number; sway: number; phase: number;
  size: number; glyph: string; rgb: number[]; baseA: number;
};

export function AmbientField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    const context = el.getContext("2d");
    if (!context) return;
    const canvas: HTMLCanvasElement = el;
    const ctx: CanvasRenderingContext2D = context;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles: P[] = [];

    // Seeded-ish deterministic-free randomness is fine here (visual only).
    const rand = (a: number, b: number) => a + Math.random() * (b - a);

    function build() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(64, Math.max(26, (w * h) / 34000)));
      particles = Array.from({ length: count }, () => ({
        x: rand(0, w),
        y: rand(0, h),
        vy: rand(6, 20) / 1000, // px per ms, very slow
        sway: rand(6, 22),
        phase: rand(0, Math.PI * 2),
        size: rand(11, 20),
        glyph: GLYPHS[Math.floor(rand(0, GLYPHS.length))],
        rgb: Math.random() > 0.5 ? VIOLET : CYAN,
        baseA: rand(0.05, 0.13),
      }));
    }

    function isDark() {
      return document.documentElement.classList.contains("dark");
    }

    let last = 0;
    function frame(t: number) {
      const dt = last ? t - last : 16;
      last = t;
      ctx.clearRect(0, 0, w, h);
      // Client wants the glyph animation clearly visible in BOTH themes.
      const darkBoost = isDark() ? 1.7 : 1.5;
      for (const p of particles) {
        if (!reduce) {
          p.y -= p.vy * dt;
          p.phase += dt * 0.0006;
          if (p.y < -30) {
            p.y = h + 30;
            p.x = rand(0, w);
          }
        }
        const x = p.x + Math.sin(p.phase) * p.sway;
        const twinkle = 0.7 + 0.3 * Math.sin(p.phase * 1.7);
        const a = p.baseA * twinkle * darkBoost;
        ctx.font = `600 ${p.size}px ui-monospace, "SF Mono", Menlo, monospace`;
        ctx.fillStyle = `rgba(${p.rgb[0]},${p.rgb[1]},${p.rgb[2]},${a})`;
        ctx.fillText(p.glyph, x, p.y);
      }
      raf = requestAnimationFrame(frame);
    }

    build();
    if (reduce) {
      // single static paint
      last = 0;
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        ctx.font = `600 ${p.size}px ui-monospace, Menlo, monospace`;
        ctx.fillStyle = `rgba(${p.rgb[0]},${p.rgb[1]},${p.rgb[2]},${p.baseA})`;
        ctx.fillText(p.glyph, p.x, p.y);
      }
    } else {
      raf = requestAnimationFrame(frame);
    }

    const onResize = () => build();
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-[1] select-none"
    />
  );
}
