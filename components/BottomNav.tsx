import React from 'react';
import { ViewState, Language } from '../types';
import { UI_TRANSLATIONS } from '../constants';
import { CalendarCheck, CalendarRange, ShoppingBasket, Settings, BookOpen } from 'lucide-react';

interface BottomNavProps {
  view: ViewState;
  setView: (view: ViewState) => void;
  language: Language;
}

const BottomNav: React.FC<BottomNavProps> = ({ view, setView, language }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-2 pb-safe pt-2 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-40">
      <div className="max-w-md mx-auto flex justify-around items-end pb-1">
        <button
          onClick={() => setView('daily')}
          className={`flex flex-col items-center p-2 min-w-[56px] rounded-lg transition-colors ${
            view === 'daily' ? 'text-emerald-700 bg-emerald-50' : 'text-slate-500 hover:bg-slate-50'
          }`}
          aria-current={view === 'daily' ? 'page' : undefined}
        >
          <CalendarCheck className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-medium">{UI_TRANSLATIONS.navDaily[language]}</span>
        </button>
        <button
          onClick={() => setView('weekly')}
          className={`flex flex-col items-center p-2 min-w-[56px] rounded-lg transition-colors ${
            view === 'weekly' ? 'text-emerald-700 bg-emerald-50' : 'text-slate-500 hover:bg-slate-50'
          }`}
          aria-current={view === 'weekly' ? 'page' : undefined}
        >
          <CalendarRange className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-medium">{UI_TRANSLATIONS.navWeekly[language]}</span>
        </button>
        <button
          onClick={() => setView('grocery')}
          className={`flex flex-col items-center p-2 min-w-[56px] rounded-lg transition-colors ${
            view === 'grocery' ? 'text-emerald-700 bg-emerald-50' : 'text-slate-500 hover:bg-slate-50'
          }`}
          aria-current={view === 'grocery' ? 'page' : undefined}
        >
          <ShoppingBasket className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-medium">{UI_TRANSLATIONS.navGrocery[language]}</span>
        </button>
        <button
          onClick={() => setView('guide')}
          className={`flex flex-col items-center p-2 min-w-[56px] rounded-lg transition-colors ${
            view === 'guide' ? 'text-emerald-700 bg-emerald-50' : 'text-slate-500 hover:bg-slate-50'
          }`}
          aria-current={view === 'guide' ? 'page' : undefined}
        >
          <BookOpen className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-medium">{UI_TRANSLATIONS.navGuide[language]}</span>
        </button>
        <button
          onClick={() => setView('settings')}
          className={`flex flex-col items-center p-2 min-w-[56px] rounded-lg transition-colors ${
            view === 'settings' ? 'text-emerald-700 bg-emerald-50' : 'text-slate-500 hover:bg-slate-50'
          }`}
          aria-current={view === 'settings' ? 'page' : undefined}
        >
          <Settings className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-medium">{UI_TRANSLATIONS.navSettings[language]}</span>
        </button>
      </div>
    </nav>
  );
};

export default BottomNav;