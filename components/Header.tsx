import React from 'react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../constants';
import { Languages } from 'lucide-react';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage }) => {
  const toggleLanguage = () => {
    if (language === 'en') setLanguage('hi');
    else if (language === 'hi') setLanguage('te');
    else setLanguage('en');
  };

  const getNextLangLabel = () => {
    if (language === 'en') return 'HI';
    if (language === 'hi') return 'TE';
    return 'EN';
  };

  const getSwitchLabel = () => {
    if (language === 'en') return "Switch to Hindi";
    if (language === 'hi') return "Switch to Telugu";
    return "Switch to English";
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-md mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-emerald-700 tracking-tight">
          {UI_TRANSLATIONS.appTitle[language]}
        </h1>
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium transition-colors focus:ring-2 focus:ring-emerald-500 focus:outline-none"
          aria-label={getSwitchLabel()}
        >
          <Languages className="w-4 h-4" />
          <span>{getNextLangLabel()}</span>
        </button>
      </div>
      <div className="bg-amber-100 text-amber-900 px-4 py-1 text-xs text-center font-medium" role="alert">
        {UI_TRANSLATIONS.demoMode[language]}
      </div>
    </header>
  );
};

export default Header;
