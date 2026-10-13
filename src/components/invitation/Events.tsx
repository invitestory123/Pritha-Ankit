import { motion } from "motion/react";
import { CalendarPlus, Clock, MapPin } from "lucide-react";
import { invitation } from "@/content/invitation";
import { Ornament, Reveal, SectionTitle } from "./Reveal";

function buildIcs(event: (typeof invitation.events)[number]) {
  const start = new Date(event.dateISO);
  const end = new Date(start.getTime() + 5 * 3_600_000);
  const stamp = (d: Date) => d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Wedding Storybook//EN",
    "BEGIN:VEVENT",
    `UID:${start.getTime()}@wedding`,
    `DTSTAMP:${stamp(new Date())}`,
    `DTSTART:${stamp(start)}`,
    `DTEND:${stamp(end)}`,
    `SUMMARY:${invitation.couple.bride} & ${invitation.couple.groom} — ${event.name}`,
    `LOCATION:${event.venue}, ${event.address}`,
    `DESCRIPTION:${event.description}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(lines.join("\r\n"))}`;
}

const eventColors: Record<string, { bg: string; icon: string; border: string }> = {
  haldi: {
    bg: "linear-gradient(135deg, color-mix(in oklab, #f5c518 18%, var(--ivory)), var(--cream))",
    icon: "oklch(0.78 0.14 86)",
    border: "color-mix(in oklab, #f5c518 50%, transparent)",
  },
  sangeet: {
    bg: "linear-gradient(135deg, color-mix(in oklab, #c084fc 15%, var(--ivory)), var(--cream))",
    icon: "oklch(0.65 0.2 305)",
    border: "color-mix(in oklab, #c084fc 40%, transparent)",
  },
  wedding: {
    bg: "linear-gradient(135deg, color-mix(in oklab, var(--rose) 12%, var(--ivory)), var(--cream))",
    icon: "oklch(0.65 0.16 5)",
    border: "color-mix(in oklab, var(--rose) 35%, transparent)",
  },
};

function EventCard({ event, index }: { event: (typeof invitation.events)[number]; index: number }) {
  const colors = eventColors[event.id] ?? eventColors.wedding;

  return (
    <Reveal delay={index * 0.1}>
      <motion.article
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        className="relative overflow-hidden rounded-[2rem] border px-7 py-8 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.15)]"
        style={{ background: colors.bg, borderColor: colors.border }}
      >
        {/* Decorative corner petal */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-6 -right-6 h-28 w-28 rounded-full opacity-30 blur-2xl"
          style={{ background: event.color }}
        />

        {/* Event emoji + name */}
        <div className="flex items-center gap-3 mb-5">
          <span className="text-3xl">{event.emoji}</span>
          <div>
            <p className="font-sans text-[0.58rem] tracking-[0.38em] uppercase" style={{ color: colors.icon }}>
              Wedding Event
            </p>
            <h3 className="font-display text-2xl text-primary sm:text-3xl">{event.name}</h3>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground mb-6">{event.description}</p>

        {/* Date, Time, Venue info */}
        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3">
            <span
              className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
              style={{ background: `color-mix(in oklab, ${event.color} 20%, transparent)` }}
            >
              <CalendarPlus size={14} style={{ color: colors.icon }} strokeWidth={1.6} />
            </span>
            <div>
              <p className="font-sans text-[0.58rem] tracking-[0.3em] uppercase text-muted-foreground">Date</p>
              <p className="font-display text-base text-primary">{event.date}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span
              className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
              style={{ background: `color-mix(in oklab, ${event.color} 20%, transparent)` }}
            >
              <Clock size={14} style={{ color: colors.icon }} strokeWidth={1.6} />
            </span>
            <div>
              <p className="font-sans text-[0.58rem] tracking-[0.3em] uppercase text-muted-foreground">Time</p>
              <p className="font-display text-base text-primary">{event.time}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span
              className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
              style={{ background: `color-mix(in oklab, ${event.color} 20%, transparent)` }}
            >
              <MapPin size={14} style={{ color: colors.icon }} strokeWidth={1.6} />
            </span>
            <div>
              <p className="font-sans text-[0.58rem] tracking-[0.3em] uppercase text-muted-foreground">Venue</p>
              <p className="font-display text-base text-primary">{event.venue}</p>
              <p className="font-sans text-xs text-muted-foreground">{event.address}</p>
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-3">
          <motion.a
            href={buildIcs(event)}
            download={`${event.id}.ics`}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-sans text-[0.62rem] tracking-[0.22em] text-primary-foreground uppercase"
            style={{ background: `color-mix(in oklab, ${event.color} 80%, oklch(0.32 0.035 60))` }}
          >
            <CalendarPlus size={13} strokeWidth={1.6} />
            Add to Calendar
          </motion.a>
          <motion.a
            href={event.mapsUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="glass-plate inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-sans text-[0.62rem] tracking-[0.22em] text-primary uppercase"
          >
            <MapPin size={13} strokeWidth={1.6} />
            Get Directions
          </motion.a>
        </div>
      </motion.article>
    </Reveal>
  );
}

/** All three wedding events — Haldi, Sangeet, and Wedding. */
export function Events() {
  return (
    <section id="events" className="relative overflow-hidden px-5 py-24">
      {/* Banana leaf background overlay */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, var(--ivory) 0%, color-mix(in oklab, var(--peach) 22%, var(--cream)) 50%, var(--ivory) 100%)",
        }}
      />
      {/* Decorative corner banana leaves via CSS */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage: "url('/banana-leaf-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="mx-auto max-w-4xl">
        <SectionTitle eyebrow="Chapter Two" title="The Celebrations" note="Join us across all three joyous events" />
        <Ornament className="mt-8" />

        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {invitation.events.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>

        {/* Dress code note */}
        <Reveal delay={0.3}>
          <div
            className="mt-12 rounded-[1.6rem] border px-7 py-6 text-center"
            style={{
              background: "color-mix(in oklab, var(--gold) 8%, var(--ivory))",
              borderColor: "color-mix(in oklab, var(--gold) 35%, transparent)",
            }}
          >
            <p className="font-sans text-[0.6rem] tracking-[0.38em] text-gold-deep uppercase mb-2">Dress Code</p>
            <p className="font-display text-lg text-primary">{invitation.dressCode}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
