import type { Language } from "@/components/providers/LanguageProvider";

import { en } from "@/data/translations/en";
import { fr } from "@/data/translations/fr";

export const translations = {
  EN: en,
  FR: fr,
};

export function getTranslations(language: Language) {
  return translations[language];
}
