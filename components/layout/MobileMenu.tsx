import Link from "next/link";
import { Moon, Sun } from "lucide-react";

import type { Language } from "@/components/providers/LanguageProvider";
import { getTranslations } from "@/lib/translations";

interface MobileMenuProps {
  onClose: () => void;
  language: Language;
  onLanguageChange: (language: Language) => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

const navigation = [
  { key: "about", href: "/#about" },
  { key: "skills", href: "/#skills" },
  { key: "projects", href: "/#projects" },
  { key: "experience", href: "/#experience" },
  { key: "contact", href: "/#contact" },
] as const;

const languages: Language[] = ["EN", "FR"];

export default function MobileMenu({
  onClose,
  language,
  onLanguageChange,
  isDark,
  onToggleTheme,
}: MobileMenuProps) {
  const t = getTranslations(language);

  return (
    <div className="fixed inset-x-0 top-16 z-40 border-b border-border bg-background md:hidden">
      <div className="mx-auto max-w-6xl px-6 py-6">
        {/* Navigation */}
        <nav className="flex flex-col">
          {navigation.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              onClick={onClose}
              className="border-b border-border py-4 text-sm font-medium transition-colors hover:text-violet"
            >
              {t.nav[item.key]}
            </Link>
          ))}
        </nav>

        {/* Language & Theme */}
        <div className="mt-6">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted">
            {t.language}
          </p>

          <div className="flex items-center gap-2">
            {/* Language buttons */}
            {languages.map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => onLanguageChange(lang)}
                aria-pressed={language === lang}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300 ${
                  language === lang
                    ? "border-transparent bg-gradient-to-r from-violet to-cyan text-white"
                    : "border-border text-muted hover:border-violet hover:bg-surface hover:text-violet"
                }`}
              >
                {lang}
              </button>
            ))}

            {/* Theme toggle */}
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={
                isDark ? "Switch to light mode" : "Switch to dark mode"
              }
              className="group flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-muted transition-all duration-300 hover:border-violet/30 hover:bg-gradient-to-r hover:from-violet/5 hover:to-cyan/5 hover:text-violet"
            >
              {isDark ? (
                <Sun
                  size={17}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:rotate-12"
                />
              ) : (
                <Moon
                  size={17}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:-rotate-12"
                />
              )}
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-col gap-3">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/syrine-elayeb-455235243/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-4 py-3 text-center text-sm font-medium transition-colors hover:bg-surface hover:text-violet"
          >
            {t.actions.linkedin}
          </a>

          {/* Download CV */}
          <a
            href="/cv/Syrine_Elayeb__Resume.pdf"
            download
            className="rounded-full border border-border px-4 py-3 text-center text-sm font-medium transition-colors hover:bg-surface hover:text-violet"
          >
            {t.actions.downloadCV}
          </a>

          {/* Let's talk */}
          <Link
            href="/#contact"
            onClick={onClose}
            className="rounded-full bg-gradient-to-r from-violet to-cyan px-4 py-3 text-center text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
          >
            {t.actions.letsTalk}
          </Link>
        </div>
      </div>
    </div>
  );
}