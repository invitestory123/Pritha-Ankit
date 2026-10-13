import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";
import { LanternField } from "./LanternField";
import { Petals } from "./Petals";
import { invitation } from "@/content/invitation";

const heroBg = "/hero-bg-tropical.png";
const coupleReal = "/couple-real.jpg";

/** Chapter one: tropical garden with real couple photo — exact faces guaranteed. */
export function Hero() {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 900], [0, reduced ? 0 : 140]);
  const titleY = useTransform(scrollY, [0, 600], [0, reduced ? 0 : -50]);
  const fade = useTransform(scrollY, [0, 520], [1, 0]);

  return (
    <section className="relative h-[100svh] min-h-[680px] w-full overflow-hidden">
      {/* Warm cream base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.975 0.022 88) 0%, oklch(0.988 0.012 92) 100%)",
        }}
      />

      {/* Tropical illustrated background with parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY, scale: 1.06 }}>
        <img
          src={heroBg}
          alt=""
          aria-hidden
          width={1080}
          height={1920}
          className="h-full w-full object-cover object-top"
        />
      </motion.div>

      {/* Centre vignette so text reads clearly */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 85% 55% at 50% 35%, color-mix(in oklab, var(--cream) 60%, transparent) 0%, transparent 100%), linear-gradient(180deg, color-mix(in oklab,var(--cream) 55%,transparent) 0%, transparent 28%, color-mix(in oklab,var(--ivory) 70%,transparent) 72%, var(--ivory) 100%)",
        }}
      />

      <LanternField count={8} travel={1.1} />
      <Petals count={10} />

      {/* Drifting cloud veils */}
      {!reduced &&
        [0, 1].map((i) => (
          <motion.div
            key={i}
            aria-hidden
            className="pointer-events-none absolute h-36 w-[160%] rounded-full blur-3xl"
            style={{
              top: `${10 + i * 14}%`,
              left: "-30%",
              background: `color-mix(in oklab, var(--ivory) ${26 - i * 8}%, transparent)`,
            }}
            animate={{ x: ["-8%", "18%", "-8%"] }}
            transition={{ duration: 54 + i * 20, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

      {/* Typography */}
      <motion.div
        className="relative z-10 flex h-full flex-col items-center px-6 pt-[8svh] text-center"
        style={{ y: titleY, opacity: fade }}
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2 }}
          className="font-sans text-[0.62rem] tracking-[0.5em] text-primary/70 uppercase sm:text-xs"
        >
          {invitation.hero.kicker}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-5xl leading-[0.95] text-primary drop-shadow-[0_2px_20px_rgba(255,255,255,0.7)] sm:text-6xl md:text-7xl"
        >
          {invitation.couple.bride}
          <span className="mx-3 font-script text-3xl italic sm:text-4xl">&amp;</span>
          <br className="sm:hidden" />
          {invitation.couple.groom}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0.4 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.85 }}
          className="mt-5 h-px w-40 origin-center"
          style={{ background: "var(--gradient-gold)" }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.0 }}
          className="mt-3 font-script text-xl text-primary/80 italic sm:text-2xl"
        >
          {invitation.hero.blessing}
        </motion.p>

        <motion.a
          href="#events"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.25 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="glass-plate shimmer mt-6 rounded-full px-8 py-3 font-sans text-[0.7rem] tracking-[0.32em] uppercase"
        >
          <span className="gold-text shimmer font-semibold">{invitation.hero.eyebrow}</span>
        </motion.a>

        {/* ── Real couple photo pinned to the bottom ── */}
        <motion.div
          className="relative mt-auto w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Soft ground shadow so photo blends with the bg */}
          <div
            aria-hidden
            className="absolute bottom-0 left-1/2 h-16 w-3/4 -translate-x-1/2 rounded-full blur-2xl"
            style={{ background: "color-mix(in oklab, var(--gold-deep) 20%, transparent)" }}
          />

          {/* Decorative arch / frame behind the photo */}
          <div className="relative mx-auto flex max-w-xs justify-center sm:max-w-sm">
            {/* Marigold arch decoration */}
            <svg
              aria-hidden
              viewBox="0 0 320 60"
              className="pointer-events-none absolute -top-8 left-0 w-full opacity-70"
              fill="none"
            >
              <path
                d="M10 55 Q160 -10 310 55"
                stroke="oklch(0.63 0.11 78)"
                strokeWidth="2"
                strokeDasharray="6 5"
                strokeLinecap="round"
              />
              {[60, 110, 160, 210, 260].map((cx, i) => (
                <circle
                  key={cx}
                  cx={cx}
                  cy={55 - Math.sin(((cx - 160) / 160) * Math.PI) * 60}
                  r={i === 2 ? 5 : 3.5}
                  fill="oklch(0.79 0.14 72)"
                  opacity="0.85"
                />
              ))}
            </svg>

            {/* The real couple photo */}
            <motion.div
              className="relative overflow-hidden rounded-t-[120px] rounded-b-2xl border-4 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.25)]"
              style={{ borderColor: "color-mix(in oklab, var(--gold) 60%, white)" }}
              animate={reduced ? {} : { y: [0, -5, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={coupleReal}
                alt="Pritha and Ankit"
                width={600}
                height={750}
                className="w-full max-w-[260px] object-cover object-top sm:max-w-[300px]"
                style={{ aspectRatio: "4/5" }}
              />
              {/* Bottom fade so photo merges with page */}
              <div
                aria-hidden
                className="absolute bottom-0 left-0 right-0 h-20"
                style={{
                  background:
                    "linear-gradient(0deg, var(--ivory) 0%, transparent 100%)",
                }}
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="mb-5 mt-2 text-primary/50"
          animate={reduced ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={22} />
        </motion.div>
      </motion.div>
    </section>
  );
}
