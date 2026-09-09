"use client";

import Link from "next/link";
import { Download, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { getTranslations } from "@/lib/translations";

import MobileMenu from "./MobileMenu";

const navigation = [
  { key: "about", href: "/#about" },
  { key: "skills", href: "/#skills" },
  { key: "projects", href: "/#projects" },
  { key: "experience", href: "/#experience" },
  { key: "contact", href: "/#contact" },
] as const;

const languages = ["EN", "FR"] as const;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return localStorage.getItem("theme") === "dark";
  });

  const { language, setLanguage } = useLanguage();

  const t = getTranslations(language);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLanguageChange = (
    lang: (typeof languages)[number],
  ) => {
    setLanguage(lang);
  };

  /*
   * Synchronize React theme state with the DOM and localStorage.
   *
   * The effect does not call setIsDark(), so it avoids the
   * "Calling setState synchronously within an effect" warning.
   */
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem(
      "theme",
      isDark ? "dark" : "light",
    );
  }, [isDark]);

  /*
   * Toggle light / dark mode.
   */
  const toggleTheme = () => {
    setIsDark((current) => !current);
  };

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
        <nav className="mx-auto grid h-16 max-w-7xl grid-cols-[minmax(180px,1fr)_auto_minmax(320px,1fr)] items-center px-6">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="justify-self-start text-lg font-semibold tracking-tight"
          >
            Syrine{" "}
            <span className="gradient-text font-bold">
              Elayeb
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center justify-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="whitespace-nowrap text-sm text-muted transition-colors hover:text-violet"
              >
                {t.nav[item.key]}
              </Link>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden items-center justify-self-end gap-3 md:flex">
            {/* Language switcher */}
            <button
              type="button"
              onClick={() =>
                handleLanguageChange(
                  language === "EN" ? "FR" : "EN",
                )
              }
              aria-label={`Switch to ${
                language === "EN" ? "French" : "English"
              }`}
              className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-3 py-2 text-xs font-medium text-foreground transition-all duration-300 hover:border-violet/30 hover:bg-gradient-to-r hover:from-violet/5 hover:to-cyan/5 hover:text-violet"
            >
              {language === "EN" ? "FR" : "EN"}
            </button>

            {/* Theme toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                isDark
                  ? "Switch to light mode"
                  : "Switch to dark mode"
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

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/syrine-elayeb-455235243/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.actions.linkedin}
              className="rounded-full border border-border px-4 py-2 text-sm font-medium transition-all duration-300 hover:border-violet/30 hover:bg-gradient-to-r hover:from-violet/5 hover:to-cyan/5 hover:text-violet"
            >
              {t.actions.linkedin}
            </a>

            {/* Download CV */}
            <a
              href="/cv/Syrine_Elayeb_CV.pdf"
              download
              aria-label={t.actions.downloadCV}
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:border-violet/30 hover:bg-gradient-to-r hover:from-violet/5 hover:to-cyan/5 hover:text-violet"
            >
              <Download
                size={16}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />

              <span>{t.actions.downloadCV}</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={
              isMenuOpen ? "Close menu" : "Open menu"
            }
            aria-expanded={isMenuOpen}
            onClick={() =>
              setIsMenuOpen((open) => !open)
            }
            className="col-start-3 ml-auto flex h-10 w-10 items-center justify-center rounded-md border border-border transition-colors hover:border-violet/30 hover:bg-violet/5 md:hidden"
          >
            <div className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 bg-foreground" />
              <span className="block h-0.5 w-5 bg-foreground" />
              <span className="block h-0.5 w-5 bg-foreground" />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      {isMenuOpen && (
        <MobileMenu
          onClose={closeMenu}
          language={language}
          onLanguageChange={setLanguage}
        />
      )}
    </>
  );
}
