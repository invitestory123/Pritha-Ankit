import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";
import { LanternField } from "./LanternField";
import { Petals } from "./Petals";
import { invitation } from "@/content/invitation";

const bananaLeafBg = "/banana-leaf-bg.png";
const coupleIllustration = "/couple-bengali.png";

/** Chapter one: tropical banana leaf garden at dawn. */
export function Hero() {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const skyY = useTransform(scrollY, [0, 900], [0, reduced ? 0 : 170]);
  const plateY = useTransform(scrollY, [0, 900], [0, reduced ? 0 : 70]);
  const titleY = useTransform(scrollY, [0, 600], [0, reduced ? 0 : -60]);
  const fade = useTransform(scrollY, [0, 520], [1, 0]);

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Warm cream base */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, oklch(0.97 0.025 85) 0%, oklch(0.985 0.015 90) 60%, oklch(0.975 0.02 75) 100%)",
        }}
      />

      {/* Banana leaf background — full cover with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: skyY }}
      >
        <img
          src={bananaLeafBg}
          alt=""
          aria-hidden
          width={1200}
          height={1600}
          className="h-full w-full object-cover object-center opacity-90"
        />
      </motion.div>

      {/* Soft cream vignette so type reads well */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, color-mix(in oklab, var(--ivory) 55%, transparent) 0%, transparent 100%), linear-gradient(180deg, color-mix(in oklab, var(--cream) 40%, transparent) 0%, transparent 30%, color-mix(in oklab, var(--cream) 65%, transparent) 75%, var(--ivory) 100%)",
        }}
      />

      <LanternField count={10} travel={1.1} />
      <Petals count={12} />

      {/* Drifting cloud veils */}
      {!reduced &&
        [0, 1].map((i) => (
          <motion.div
            key={i}
            aria-hidden
            className="pointer-events-none absolute h-40 w-[160%] rounded-full blur-3xl"
            style={{
              top: `${12 + i * 16}%`,
              left: "-30%",
              background: `color-mix(in oklab, var(--ivory) ${28 - i * 8}%, transparent)`,
            }}
            animate={{ x: ["-8%", "18%", "-8%"] }}
            transition={{ duration: 52 + i * 22, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

      {/* Birds */}
      {!reduced &&
        [0, 1, 2].map((i) => (
          <motion.svg
            key={i}
            aria-hidden
            viewBox="0 0 24 8"
            className="pointer-events-none absolute w-4 text-primary/40 sm:w-5"
            style={{ top: `${26 + i * 5}%` }}
            animate={{ x: ["-10vw", "112vw"], y: [0, -14, 6, 0] }}
            transition={{
              duration: 34 + i * 9,
              delay: i * 7,
              repeat: Infinity,
              ease: "linear",
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <path
              d="M1 5C4 1 7 1 10 5M14 5c3-4 6-4 9 0"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.1"
              strokeLinecap="round"
            />
          </motion.svg>
        ))}

      {/* Typography */}
      <motion.div
        className="relative z-10 flex h-full flex-col items-center px-6 pt-[10svh] text-center"
        style={{ y: titleY, opacity: fade }}
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2 }}
          className="font-sans text-[0.62rem] tracking-[0.5em] text-primary/70 uppercase sm:text-xs"
        >
          {invitation.hero.kicker}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 text-5xl leading-[0.95] text-primary drop-shadow-[0_2px_18px_rgba(255,255,255,0.65)] sm:text-6xl md:text-7xl"
        >
          {invitation.couple.bride}
          <span className="mx-3 font-script text-3xl italic sm:text-4xl">&amp;</span>
          <br className="sm:hidden" />
          {invitation.couple.groom}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0.4 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="mt-5 h-px w-40 origin-center"
          style={{ background: "var(--gradient-gold)" }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.05 }}
          className="mt-4 font-script text-xl text-primary/80 italic sm:text-2xl"
        >
          {invitation.hero.blessing}
        </motion.p>

        <motion.a
          href="#events"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="glass-plate shimmer mt-7 rounded-full px-8 py-3 font-sans text-[0.7rem] tracking-[0.32em] uppercase"
        >
          <span className="gold-text shimmer font-semibold">{invitation.hero.eyebrow}</span>
        </motion.a>

        {/* Couple illustration — animated watercolor with real-face style */}
        <motion.div
          className="relative mt-auto w-full max-w-xs sm:max-w-sm"
          style={{ y: plateY }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img
            src={coupleIllustration}
            alt="Illustrated portrait of Pritha and Ankit in traditional Bengali wedding attire"
            width={600}
            height={700}
            className="w-full object-contain drop-shadow-[0_8px_32px_rgba(0,0,0,0.18)]"
            animate={reduced ? {} : { y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div
          className="mb-6 text-primary/50"
          animate={reduced ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={22} />
        </motion.div>
      </motion.div>
    </section>
  );
}
