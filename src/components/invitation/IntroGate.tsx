import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const seal = "/invite-seal-tropical.jpg";

/**
 * The cover of the wedding invitation: a wax-sealed envelope framed in traditional
 * banana leaves, marigolds, and temple pillars. Tapping the seal opens the invitation
 * and begins the wedding melody.
 */
export function IntroGate() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  // Lock scrolling until the invitation is open.
  useEffect(() => {
    if (isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  const open = () => {
    if (isOpening || isOpen) return;
    setIsOpening(true);
    window.dispatchEvent(new CustomEvent("wedding:play-music"));
    window.setTimeout(() => {
      setIsOpen(true);
    }, 1200);
  };

  const finish = () => {
    if (isOpening || isOpen) return;
    setIsOpening(true);
    window.dispatchEvent(new CustomEvent("wedding:play-music"));
    window.setTimeout(() => {
      setIsOpen(true);
    }, 500);
  };

  if (isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[var(--ivory)]"
        initial={{ opacity: 1 }}
        animate={{
          opacity: isOpening ? 0 : 1,
          scale: isOpening ? 1.08 : 1,
          filter: isOpening ? "blur(6px)" : "blur(0px)",
        }}
        transition={{ duration: isOpening ? 1.2 : 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ pointerEvents: isOpening ? "none" : "auto" }}
      >
        {/* The sealed envelope plate with banana leaves & marigolds */}
        <button
          type="button"
          onClick={open}
          disabled={isOpening}
          aria-label="Tap the seal to open the invitation"
          className="group relative h-full w-full cursor-pointer focus:outline-none"
        >
          <img
            src={seal}
            alt="Ivory wedding envelope with gold wax seal framed by banana leaves and marigold garlands"
            className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.01]"
          />

          {/* Breathing aura over the wax seal at x=50%, y=53% */}
          <motion.span
            aria-hidden
            className="pointer-events-none absolute top-[53%] left-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
            style={{
              background:
                "radial-gradient(circle, color-mix(in oklab, var(--gold) 65%, transparent), transparent 70%)",
            }}
            animate={
              isOpening
                ? { scale: [1, 2.5], opacity: [0.8, 0] }
                : { opacity: [0.35, 0.85, 0.35], scale: [0.95, 1.2, 0.95] }
            }
            transition={{
              duration: isOpening ? 0.8 : 2.6,
              repeat: isOpening ? 0 : Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Subtle pulsating ring around the wax seal */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute top-[53%] left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--gold)]/60"
            animate={
              isOpening
                ? { scale: 2.2, opacity: 0 }
                : { scale: [1, 1.35, 1], opacity: [0.6, 0.1, 0.6] }
            }
            transition={{
              duration: isOpening ? 0.7 : 2.4,
              repeat: isOpening ? 0 : Infinity,
              ease: "easeOut",
            }}
          />

          {/* Prompt banner below seal */}
          <motion.div
            className="pointer-events-none absolute bottom-16 left-1/2 -translate-x-1/2 rounded-full border border-[var(--gold)]/30 bg-[color-mix(in_oklab,var(--ivory)_85%,transparent)] px-6 py-2.5 shadow-lg backdrop-blur-md"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="font-sans text-[0.65rem] font-medium tracking-[0.3em] text-primary uppercase">
              Tap to Open Invitation
            </p>
          </motion.div>
        </button>

        {/* Skip button */}
        <button
          type="button"
          onClick={finish}
          className="absolute right-5 bottom-6 z-10 rounded-full bg-[color-mix(in_oklab,var(--ivory)_75%,transparent)] px-4 py-2 font-sans text-[0.6rem] tracking-[0.28em] text-primary uppercase shadow-sm backdrop-blur transition hover:bg-[var(--ivory)] active:scale-95"
        >
          Skip
        </button>
      </motion.div>
    </AnimatePresence>
  );
}

