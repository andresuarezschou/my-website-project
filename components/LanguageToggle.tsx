// components/LanguageToggle.tsx
"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/lib/content";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const options: { code: Language; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "da", label: "DA" },
    { code: "es", label: "ES" },
  ];

  return (
    <div className="flex gap-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-md">
      {options.map((opt) => (
        <button
          key={opt.code}
          onClick={() => setLanguage(opt.code)}
          className={`px-2 py-1 text-xs font-semibold rounded ${
            language === opt.code
              ? "bg-white dark:bg-gray-700 shadow text-blue-600 dark:text-blue-400"
              : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
