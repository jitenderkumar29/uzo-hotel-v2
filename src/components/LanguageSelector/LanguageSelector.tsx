"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./LanguageSelector.module.css";

interface Language {
  lang: string;
  name: string;
  flag: string;
}

interface Country {
  value: string;
  label: string;
}

interface Currency {
  value: string;
  label: string;
}

const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedLanguage,] = useState<Language>({
  //   lang: "en",
  //   name: "English",
  //   flag: "🌐",
  // });
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: Language[] = [
    { lang: "en", name: "English", flag: "🇬🇧" },
    { lang: "hi", name: "Hindi", flag: "🇮🇳" },
    { lang: "es", name: "Español", flag: "🇪🇸" },
    { lang: "fr", name: "Français", flag: "🇫🇷" },
    { lang: "de", name: "Deutsch", flag: "🇩🇪" },
    { lang: "zh", name: "中文", flag: "🇨🇳" },
  ];

  const countries: Country[] = [
    { value: "United States", label: "United States" },
    { value: "United Kingdom", label: "United Kingdom" },
    { value: "France", label: "France" },
    { value: "India", label: "India" },
    { value: "China", label: "China" },
  ];

  const currencies: Currency[] = [
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
    { value: "GBP", label: "GBP" },
    { value: "INR", label: "INR" },
    { value: "JPY", label: "JPY" },
  ];

  const [country, setCountry] = useState<string>("United States");
  const [language, setLanguage] = useState<string>("English");
  const [currency, setCurrency] = useState<string>("USD");

  // const toggleDropdown = () => {
  //   setIsOpen(!isOpen);
  // };

  // const selectLanguage = (lang: string) => {
  //   const selected = languages.find((l) => l.lang === lang);
  //   if (selected) {
  //     setSelectedLanguage({
  //       lang: selected.lang,
  //       name: selected.name,
  //       flag: selected.flag,
  //     });
  //     setLanguage(selected.name);
  //   }
  //   setIsOpen(false);
  //   console.log("Language changed to:", lang);
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log("Selected:", { country, language, currency });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`${styles.languageSelector} ${isOpen ? styles.active : ""}`}
      ref={dropdownRef}
    >
      {/* <button
        className={styles.languageButton}
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Language selector"
      >
        <span className={styles.selectedLanguage}>
          <span className={styles.flagIcon}>{selectedLanguage.flag}</span>
          {selectedLanguage.name}
        </span>
        <span className={styles.dropdownArrow}>▼</span>
      </button> */}

      {/* {isOpen && (
              )} */}
      <div className={styles.selectorContainer}>
        <div className={styles.selectorCard}>
          <h2 className={styles.sectionTitle}>
            Select Your Language and Currency
          </h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.selectGroup}>
              <label htmlFor="country">Country/Region</label>
              <select
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className={styles.styledSelect}
                aria-label="Select country"
              >
                {countries.map((country) => (
                  <option key={country.value} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.selectGroup}>
              <label htmlFor="currency">Currency</label>
              <select
                id="currency"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className={styles.styledSelect}
                aria-label="Select currency"
              >
                {currencies.map((curr) => (
                  <option key={curr.value} value={curr.value}>
                    {curr.label}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.selectGroup}>
              <label htmlFor="language">Language</label>
              <select
                id="language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className={styles.styledSelect}
                aria-label="Select language"
              >
                {languages.map((lang) => (
                  <option key={lang.lang} value={lang.name}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className={styles.confirmButton}>
              Confirm
              {/* Confirm language and currency */}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;