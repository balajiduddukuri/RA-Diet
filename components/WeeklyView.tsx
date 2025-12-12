import React from 'react';
import { Language, WeeklyPlan } from '../types';
import { UI_TRANSLATIONS } from '../constants';
import { CalendarDays, ChevronRight } from 'lucide-react';

interface WeeklyViewProps {
  plan: WeeklyPlan;
  language: Language;
  onDaySelect?: (index: number) => void;
}

const WeeklyView: React.FC<WeeklyViewProps> = ({ plan, language, onDaySelect }) => {
  const getDisplayDate = (index: number) => {
    const date = new Date();
    const currentDay = date.getDay(); // 0 = Sun, 1 = Mon
    const normalizedCurrent = currentDay === 0 ? 6 : currentDay - 1;
    const diff = index - normalizedCurrent;
    date.setDate(date.getDate() + diff);
    const localeMap = { en: 'en-IN', hi: 'hi-IN', te: 'te-IN' };
    return date.toLocaleDateString(localeMap[language], { month: 'short', day: 'numeric' });
  };

  return (
    <div className="max-w-md mx-auto p-4 pb-24">
      <div className="flex items-center gap-2 mb-6">
        <CalendarDays className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-slate-900">{UI_TRANSLATIONS.weeklyOverview[language]}</h2>
      </div>

      <div className="space-y-4">
        {plan.days.map((day, index) => (
          <button 
            key={day.date} 
            onClick={() => onDaySelect?.(index)}
            className="w-full text-left bg-white rounded-lg border border-slate-200 p-4 shadow-sm transition-all hover:shadow-md hover:border-emerald-300 group focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label={`${day.dayName[language]}, tap to view full plan`}
          >
            <h3 className="font-bold text-lg text-slate-900 mb-2 border-b border-slate-100 pb-2 flex justify-between items-center">
              <span className="group-hover:text-emerald-700 transition-colors">{day.dayName[language]}</span>
              <div className="flex items-center gap-2">
                <span className="text-slate-400 text-sm font-normal">{getDisplayDate(index)}</span>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-500" />
              </div>
            </h3>
            <ul className="space-y-2">
              {day.meals.map(meal => (
                <li key={meal.id} className="flex gap-2 text-sm text-slate-700">
                  <span className="font-medium text-emerald-600 uppercase w-20 flex-shrink-0 text-xs mt-0.5">
                    {meal.type}
                  </span>
                  <span className="truncate">{meal.title[language]}</span>
                </li>
              ))}
            </ul>
            <div className="mt-3 pt-2 text-xs text-center text-emerald-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              {UI_TRANSLATIONS.tapToView[language]}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default WeeklyView;