import english from "./locales/en/common.json";
import polish from "./locales/pl/common.json";

const languages = ["en", "pl"] as const;

export const supportedLanguages = [...languages];
export type Language = (typeof languages)[number];

export type Resource = {
  common: typeof english;
};

export const resources: Record<Language, Resource> = {
  en: {
    common: english,
  },
  pl: {
    common: polish,
  },
};

export const returnLanguageIfSupported = (
  lang?: string
): Language | undefined => {
  if (supportedLanguages.includes(lang as Language)) {
    return lang as Language;
  }

  return undefined;
};
