"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  const [currentYear, setCurrentYear] = useState(2024);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  // Hide footer on deck page
  if (pathname === "/deck") return null;

  const sections = {
    main: [
      { label: "Blog", href: "https://soulagents.io/blog" },
      { label: "Whitepaper", href: "https://soulagents.io/whitepaper" },
    ],
    legal: [
      { label: "Terms of Service", href: "https://soulagents.io/terms" },
      { label: "Privacy Policy", href: "https://soulagents.io/privacy" },
    ],
    social: [
      { label: "X (Twitter)", href: "https://x.com/soul_agents" },
      { label: "Telegram", href: "https://t.me/soul_agents" },
    ],
  };

  return (
    <footer className="border-t border-white/10 w-full relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-lg -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="gradient-text font-semibold mb-4">Soul AI Agents</h3>
            <ul className="space-y-2">
              {sections.main.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="nav-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="gradient-text font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {sections.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="nav-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="gradient-text font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              {sections.social.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center md:text-left">
          <div className="text-white/60 text-sm">
            © {currentYear} Soul AI Agents. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
