import Link from "next/link";

import type { Language } from "@/components/providers/LanguageProvider";

interface MobileMenuProps {
  onClose: () => void;
  language: Language;
  onLanguageChange: (language: Language) => void;
}

const navigation = [
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Experience", href: "/#experience" },
  { name: "Contact", href: "/#contact" },
];

const languages: Language[] = ["EN", "FR"];

export default function MobileMenu({
  onClose,
  language,
  onLanguageChange,
}: MobileMenuProps) {
  return (
    <div className="fixed inset-x-0 top-16 z-40 border-b border-border bg-background md:hidden">
      <div className="mx-auto max-w-6xl px-6 py-6">
        {/* Navigation */}
        <nav className="flex flex-col">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={onClose}
              className="border-b border-border py-4 text-sm font-medium transition-colors hover:text-violet"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Language */}
        <div className="mt-6">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted">
            Language
          </p>

          <div className="flex gap-2">
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
            LinkedIn
          </a>

          {/* Download CV */}
          <a
            href="/cv/Syrine_Elayeb_CV.pdf"
            download
            className="rounded-full border border-border px-4 py-3 text-center text-sm font-medium transition-colors hover:bg-surface hover:text-violet"
          >
            Download CV
          </a>

          {/* Contact */}
          <Link
            href="/#contact"
            onClick={onClose}
            className="rounded-full bg-foreground px-4 py-3 text-center text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            Let&apos;s talk
          </Link>
        </div>
      </div>
    </div>
  );
}
