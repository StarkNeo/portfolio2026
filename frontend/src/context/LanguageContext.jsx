import { createContext, useState, useEffect } from "react";
import en from '../languages/en.json';
import es from '../languages/es.json';

const LanguageContext = createContext();
const languages = { en, es };

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

    useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
    }, []);

    const changeLanguage = (lang) => {
      setLanguage(lang);
      localStorage.setItem('language', lang);
    };

    const translations = (key) => languages[language]?.[key] || languages.en[key];

  return (
    <LanguageContext.Provider value={{ language, translations, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
export { LanguageContext };