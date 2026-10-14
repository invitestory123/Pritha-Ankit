import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";
import { LanternField } from "./LanternField";
import { Petals } from "./Petals";
import { invitation } from "@/content/invitation";

const heroBg = "/hero-bg-tropical.png";
const coupleAnimated = "/couple-animated-hero.png";

/** Chapter one: Bengali wedding background with banana leaves, mandap, and animated couple in Bengali attire. */
export function Hero() {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 900], [0, reduced ? 0 : 100]);
  const plateY = useTransform(scrollY, [0, 900], [0, reduced ? 0 : 50]);
  const titleY = useTransform(scrollY, [0, 600], [0, reduced ? 0 : -40]);
  const fade = useTransform(scrollY, [0, 520], [1, 0]);

  return (
    <section className="relative h-[100svh] min-h-[720px] w-full overflow-hidden">
      {/* Warm cream base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.975 0.022 88) 0%, oklch(0.988 0.012 92) 100%)",
        }}
      />

      {/* Bengali wedding illustrated background with parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY, scale: 1.04 }}>
        <img
          src={heroBg}
          alt="Traditional Bengali wedding mandap and couple with banana leaf canopy"
          width={1080}
          height={1945}
          className="h-full w-full object-cover object-top"
        />
      </motion.div>

      {/* Centre subtle parchment vignette to enhance typography readability while keeping artwork vibrant */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 50% at 50% 36%, color-mix(in oklab, var(--cream) 45%, transparent) 0%, transparent 100%), linear-gradient(180deg, transparent 0%, transparent 65%, color-mix(in oklab, var(--ivory) 40%, transparent) 85%, var(--ivory) 100%)",
        }}
      />

      <LanternField count={6} travel={1.05} />
      <Petals count={12} />

      {/* Drifting subtle golden mist */}
      {!reduced &&
        [0, 1].map((i) => (
          <motion.div
            key={i}
            aria-hidden
            className="pointer-events-none absolute h-32 w-[150%] rounded-full blur-3xl"
            style={{
              top: `${14 + i * 16}%`,
              left: "-25%",
              background: `color-mix(in oklab, var(--gold) ${12 - i * 4}%, transparent)`,
            }}
            animate={{ x: ["-6%", "14%", "-6%"] }}
            transition={{ duration: 48 + i * 18, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

      {/* Typography and couple placed in open parchment area */}
      <motion.div
        className="relative z-10 flex min-h-[100svh] flex-col items-center justify-between px-6 pt-[9svh] pb-4 text-center"
        style={{ y: titleY, opacity: fade }}
      >
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.15 }}
            className="mb-1 font-serif text-sm tracking-[0.25em] text-primary/80 sm:text-base"
          >
            ॥ শুভ বিবাহ ॥
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3 }}
            className="font-sans text-[0.62rem] tracking-[0.45em] text-primary/75 uppercase sm:text-xs"
          >
            {invitation.hero.kicker}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-2 text-4xl leading-[0.95] text-primary drop-shadow-[0_2px_18px_rgba(255,255,255,0.85)] sm:text-5xl md:text-6xl"
          >
            {invitation.couple.bride}
            <span className="mx-2 font-script text-2xl italic sm:text-3xl">&amp;</span>
            <br className="sm:hidden" />
            {invitation.couple.groom}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0.3 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="mt-2.5 h-px w-32 origin-center"
            style={{ background: "var(--gradient-gold)" }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.95 }}
            className="mt-2 font-script text-base text-primary/85 italic sm:text-xl"
          >
            {invitation.hero.blessing}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.15 }}
            className="mt-3 flex flex-col items-center gap-1.5 sm:flex-row sm:gap-3"
          >
            <a
              href="#events"
              className="glass-plate shimmer rounded-full px-6 py-2 font-sans text-[0.65rem] tracking-[0.28em] uppercase transition-transform hover:scale-105 active:scale-95"
            >
              <span className="gold-text shimmer font-semibold">{invitation.hero.eyebrow}</span>
            </a>
            <span className="font-sans text-[0.62rem] tracking-[0.18em] text-primary/70 uppercase">
              11 December 2026 • Jamshedpur
            </span>
          </motion.div>
        </div>

        {/* AI Animated Bengali Couple with Real Faces */}
        <motion.div
          className="relative mt-2 mb-1 w-full max-w-[230px] sm:max-w-[270px] md:max-w-[300px]"
          style={{ y: plateY }}
          initial={{ opacity: 0, y: 40, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Soft golden ground halo */}
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-1/2 h-14 w-3/4 -translate-x-1/2 rounded-full blur-2xl"
            style={{ background: "color-mix(in oklab, var(--gold) 35%, transparent)" }}
          />
          <motion.img
            src={coupleAnimated}
            alt="AI animated portrait of Pritha and Ankit in traditional Bengali wedding attire"
            width={600}
            height={800}
            className="w-full object-contain drop-shadow-[0_12px_32px_rgba(0,0,0,0.2)]"
            animate={reduced ? {} : { y: [0, -6, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Scroll prompt at bottom center */}
        <motion.div
          className="mb-2 flex flex-col items-center text-primary/70"
          animate={reduced ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="mb-0.5 font-sans text-[0.55rem] tracking-[0.3em] uppercase opacity-75">
            Scroll to explore
          </span>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
