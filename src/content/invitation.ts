/**
 * All copy for the invitation lives here — swap these values and the whole
 * storybook updates.
 */

export const invitation = {
  couple: {
    bride: "Pritha",
    groom: "Ankit",
    brideFull: "Pritha Datta",
    groomFull: "Ankit Bhushan",
    initials: "P & A",
  },
  /** ISO date-time of the Wedding ceremony */
  dateISO: "2026-12-11T19:00:00+05:30",
  dateLabel: "Friday, 11 December 2026",
  timeLabel: "7:00 in the evening",
  venue: {
    name: "Beldih Golf Course",
    address: "Sonari, Jamshedpur, Jharkhand",
    mapsUrl: "https://maps.app.goo.gl/BCmTg2NTrvzUugZ79?g_st=ic",
    mapsQuery: "Beldih Golf Course Sonari Jamshedpur Jharkhand",
  },
  dressCode: "Traditional Bengali & Festive Indian — Pastels, Silk & Gold",
  music: {
    title: "Biya Legechhe",
    artist: "Lagnajita Chakraborty",
    videoId: "rm2gYDkaVqs",
    youtubeUrl: "https://youtube.com/shorts/rm2gYDkaVqs?si=8FMVTMcoz6Ec8ZpU",
  },
  hero: {
    kicker: "Together with our families",
    eyebrow: "Save the Date",
    blessing: "Two souls, one eternal celebration",
  },
  /** All wedding events in chronological order */
  events: [
    {
      id: "haldi",
      name: "Haldi",
      emoji: "🌼",
      date: "Thursday, 10 December 2026",
      dateISO: "2026-12-10T11:00:00+05:30",
      time: "11:00 AM onwards",
      venue: "Sonnet",
      address: "Sonnet, Jamshedpur",
      mapsUrl: "https://maps.app.goo.gl/drDfYVM9bmtXQbqG8?g_st=ic",
      color: "#f5c518",
      description: "A joyful ceremony where the couple is adorned with turmeric paste, blessing them with prosperity and radiance.",
    },
    {
      id: "sangeet",
      name: "Sangeet",
      emoji: "🎶",
      date: "Thursday, 10 December 2026",
      dateISO: "2026-12-10T19:00:00+05:30",
      time: "7:00 PM onwards",
      venue: "Beldih Golf Course",
      address: "Sonari, Jamshedpur, Jharkhand",
      mapsUrl: "https://maps.app.goo.gl/BCmTg2NTrvzUugZ79?g_st=ic",
      color: "#c084fc",
      description: "An evening of music, dance, and laughter as both families come together to celebrate the union.",
    },
    {
      id: "wedding",
      name: "Wedding",
      emoji: "💍",
      date: "Friday, 11 December 2026",
      dateISO: "2026-12-11T19:00:00+05:30",
      time: "7:00 PM onwards",
      venue: "Beldih Golf Course",
      address: "Sonari, Jamshedpur, Jharkhand",
      mapsUrl: "https://maps.app.goo.gl/BCmTg2NTrvzUugZ79?g_st=ic",
      color: "#f97316",
      description: "The sacred ceremony where Pritha and Ankit take their eternal vows under the stars.",
    },
  ],
  story: {
    title: "The Two of Them",
    subtitle: "A journey of laughter, companionship, and love",
    bride: {
      name: "Pritha Datta",
      role: "The Bride",
      text: "Loves warm smiles, candid moments, and spontaneous adventures. Her joy lights up every room, and she loves with an open and compassionate heart.",
    },
    groom: {
      name: "Ankit Bhushan",
      role: "The Groom",
      text: "Grounding, thoughtful, and steadfast. He finds happiness in making her laugh, shares her passion for life, and holds every memory close.",
    },
  },
  chapters: [
    {
      no: "I",
      title: "When Two Paths Crossed",
      when: "The Beginning",
      text: "A serendipitous meeting that turned into conversations that lasted late into the night. It didn't take long to realize this was something truly special.",
    },
    {
      no: "II",
      title: "Shared Laughs & Long Journeys",
      when: "Growing Closer",
      text: "Through shared coffees, quiet strolls, and countless shared stories, they discovered that ordinary moments felt extraordinary together.",
    },
    {
      no: "III",
      title: "The Promise",
      when: "A Forever Yes",
      text: "Hand in hand, with grateful hearts and shared dreams for tomorrow, they decided on forever.",
    },
    {
      no: "IV",
      title: "The Celebration Begins",
      when: "10–11 December 2026",
      text: "Under starlit winter skies at Beldih Golf Course, surrounded by family, love, and sacred vows, our new chapter begins.",
    },
  ],
  footer: {
    line1: "Come celebrate our love.",
    line2: "Dance, laugh, and celebrate with us.",
    signoff: "With all our love, Pritha & Ankit",
  },
} as const;

export const wishes = [
  {
    from: "With Family Blessings",
    text: "May your home always be filled with endless warmth, laughter, and lifelong friendship.",
  },
  {
    from: "Friends & Well-wishers",
    text: "Here's to two of the finest souls finding each other and beginning the grandest adventure.",
  },
  {
    from: "The Datta & Bhushan Families",
    text: "Two families united with love, prayers, and joy for a wonderful life together.",
  },
] as const;
