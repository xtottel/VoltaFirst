// src/config/announcement.ts

export interface Announcement {
  title: string;
  subtext: string;
  hasCountdown: boolean;
  targetDate: string | null;
  button: {
    text: string;
    url: string;
    hasPulse: boolean;
  };
}

export const announcementConfig: {
  enabled: boolean;
  announcements: Announcement[];
} = {
  enabled: true,
  announcements: [
    {
      title: "🚀 Sendexa is Now Live!",
      subtext: "Power your apps with fast, reliable SMS, OTP, Email & Voice APIs.",
      hasCountdown: false,
      targetDate: null,
      button: {
        text: "Explore APIs",
        url: "https://sendexa.co/products/sms",
        hasPulse: true,
      },
    },
    {
      title: "📢 Join Our Launch Webinar",
      subtext: "Live demo + Q&A on how to integrate Sendexa in 5 mins.",
      hasCountdown: true,
      targetDate: "2025-08-15T15:00:00Z", // adjust this date/time as needed
      button: {
        text: "Register Now",
        url: "https://sendexa.co/webinar",
        hasPulse: true,
      },
    },
    {
      title: "💡 Developer Friendly Docs",
      subtext: "Clear guides, sandbox keys, instant testing — no guesswork.",
      hasCountdown: false,
      targetDate: null,
      button: {
        text: "Read Docs",
        url: "/developers",
        hasPulse: false,
      },
    },
  ],
};
