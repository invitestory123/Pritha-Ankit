import { createFileRoute } from "@tanstack/react-router";
import { IntroGate } from "@/components/invitation/IntroGate";
import { Hero } from "@/components/invitation/Hero";
import { CoupleStory } from "@/components/invitation/CoupleStory";
import { Countdown } from "@/components/invitation/Countdown";
import { Events } from "@/components/invitation/Events";
import { Timeline } from "@/components/invitation/Timeline";
import { Gallery } from "@/components/invitation/Gallery";
import { Footer } from "@/components/invitation/Footer";
import { MusicPlayer } from "@/components/invitation/MusicPlayer";
import { invitation } from "@/content/invitation";

const title = `${invitation.couple.bride} & ${invitation.couple.groom} — Wedding Invitation | 11 December 2026`;
const description = `॥ শুভ বিবাহ ॥ We joyfully invite you to celebrate the wedding of ${invitation.couple.brideFull} & ${invitation.couple.groomFull} on Friday, 11 December 2026 at ${invitation.venue.name}, Jamshedpur. Join us for Haldi, Sangeet & the Wedding celebrations.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: "/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "675" },
      { property: "og:image:alt", content: `Wedding Invitation — ${invitation.couple.bride} & ${invitation.couple.groom}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <IntroGate />
      <MusicPlayer />
      <Hero />
      <CoupleStory />
      <Countdown />
      <Events />
      <Timeline />
      <Gallery />
      <Footer />
    </main>
  );
}
