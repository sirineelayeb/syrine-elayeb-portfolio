"use client";

import { Mail } from "lucide-react";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { getTranslations } from "@/lib/translations";

export default function Footer() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Syrine Elayeb. {t.footer.rights}
        </p>

        <div className="flex items-center gap-3">
          {/* GitHub */}
          <a
            href="https://github.com/sirineelayeb"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.footer.github}
            className="group flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-muted transition-all duration-300 hover:border-violet/30 hover:bg-gradient-to-r hover:from-violet/5 hover:to-cyan/5 hover:text-violet"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-[17px] w-[17px] transition-transform duration-300 group-hover:scale-110"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.701 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/syrine-elayeb-455235243/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.footer.linkedin}
            className="group flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-muted transition-all duration-300 hover:border-violet/30 hover:bg-gradient-to-r hover:from-violet/5 hover:to-cyan/5 hover:text-violet"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-[17px] w-[17px] transition-transform duration-300 group-hover:scale-110"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.287ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0-4.124ZM3.555 20.452h3.564V8.999H3.555v11.453Z" />
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:syrine.elayeb.dev@gmail.com"
            aria-label={t.footer.email}
            className="group flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-muted transition-all duration-300 hover:border-violet/30 hover:bg-gradient-to-r hover:from-violet/5 hover:to-cyan/5 hover:text-violet"
          >
            <Mail
              size={17}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
