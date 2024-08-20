"use client";

import { useRouter } from "next/navigation";
function LanguageSwitcher({ languages }) {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const changeLanguage = (newLocale) => {
    // const { pathname, asPath, query } = router;
    // router.push({ pathname, query }, asPath, { locale: newLocale });
  };
  return (
    <div className="languageSelectorContainer">
      <select
        value={activeLocale}
        className="form-select languageSelector"
        aria-label="select language"
        onChange={(e) => changeLanguage(e.target.value)}
      >
        {languages.map((lang) => (
          <option value={lang} key={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSwitcher;
