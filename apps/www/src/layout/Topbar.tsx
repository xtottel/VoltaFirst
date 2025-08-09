"use client";

import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Megaphone,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Container } from "./Container";
import { announcementConfig, Announcement } from "@/config/announcement";

const TopBar = () => {
  const [showBanner, setShowBanner] = useState<boolean>(announcementConfig.enabled);
  const [countdowns, setCountdowns] = useState<Record<string, string>>({});
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const contactNumber = "(+233) 555 539 152";
  const contactEmail = "hello@sendexa.co";

  const currentAnnouncement: Announcement =
    announcementConfig.announcements[currentIndex];

  const socialLinks = [
    { icon: <Facebook className="h-4 w-4" />, url: "#", label: "Facebook" },
    { icon: <Twitter className="h-4 w-4" />, url: "#", label: "Twitter" },
    { icon: <Instagram className="h-4 w-4" />, url: "#", label: "Instagram" },
    { icon: <Linkedin className="h-4 w-4" />, url: "#", label: "LinkedIn" },
    { icon: <Youtube className="h-4 w-4" />, url: "#", label: "YouTube" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        (prev + 1) % announcementConfig.announcements.length
      );
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];

    announcementConfig.announcements.forEach((announcement, index) => {
      if (announcement.hasCountdown && announcement.targetDate) {
        const id = `a${index}`;
        const interval = setInterval(() => {
          const now = Date.now();
          const target = new Date(announcement.targetDate!).getTime();
          const distance = target - now;

          if (distance <= 0) {
            setCountdowns((prev) => ({
              ...prev,
              [id]: "Event started 🎉",
            }));
            clearInterval(interval);
            return;
          }

          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const minutes = Math.floor(
            (distance % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);

          setCountdowns((prev) => ({
            ...prev,
            [id]: `${days}d ${hours}h ${minutes}m ${seconds}s`,
          }));
        }, 1000);

        intervals.push(interval);
      }
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className="relative z-50">
      {showBanner && (
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-sm py-2 px-4"
        >
          <Container>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
              <div className="flex items-center gap-2 text-center sm:text-left">
                <Megaphone className="h-4 w-4 animate-pulse shrink-0" />
                <div>
                  <p className="font-medium">{currentAnnouncement.title}</p>
                  <p className="text-xs opacity-90">
                    {currentAnnouncement.subtext}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {currentAnnouncement.hasCountdown && (
                  <span className="text-xs bg-black/20 px-3 py-1 rounded-full font-mono">
                    {
                      countdowns[`a${currentIndex}`] ??
                      "Loading..."
                    }
                  </span>
                )}

                <motion.a
                  href={currentAnnouncement.button.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative bg-white text-black text-xs font-semibold px-4 py-1.5 rounded transition overflow-hidden z-10"
                >
                  <span className="relative z-20">
                    {currentAnnouncement.button.text}
                  </span>
                  {currentAnnouncement.button.hasPulse && (
                    <motion.div
                      animate={{
                        opacity: [0.4, 1, 0.4],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="absolute inset-0 rounded bg-white opacity-20 z-0"
                    />
                  )}
                </motion.a>

                <button
                  onClick={() => setShowBanner(false)}
                  className="text-white text-xs hover:underline"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </Container>
        </motion.div>
      )}

      {/* TopBar */}
      <div className="bg-gray-900 text-gray-300 border-b border-gray-800 text-sm">
        <Container>
          <div className="flex items-center justify-between h-10 py-1">
            <div className="flex items-center space-x-4">
              <motion.a
                href={`tel:${contactNumber}`}
                className="flex items-center hover:text-white transition"
                whileHover={{ scale: 1.03 }}
              >
                <Phone className="h-4 w-4 mr-1.5" />
                <span>{contactNumber}</span>
              </motion.a>

              <motion.a
                href={`mailto:${contactEmail}`}
                className="hidden md:flex items-center hover:text-white transition"
                whileHover={{ scale: 1.03 }}
              >
                <Mail className="h-4 w-4 mr-1.5" />
                <span>{contactEmail}</span>
              </motion.a>
            </div>

            <div className="flex items-center space-x-3">
              {socialLinks.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.url}
                  aria-label={item.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default TopBar;
