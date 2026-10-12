// components/Hero.tsx
"use client";

import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="py-12">
      <h1 className="text-4xl font-bold">{t.hero.title}</h1>
      <p className="text-lg text-gray-600">{t.hero.subtitle}</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
        {t.hero.aboutBtn}
      </button>
    </section>
  );
}
