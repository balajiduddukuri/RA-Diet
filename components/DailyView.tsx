import React, { useEffect, useState } from 'react';
import { Language, WeeklyPlan } from '../types';
import { UI_TRANSLATIONS } from '../constants';
import MealCard from './MealCard';
import PrepCard from './PrepCard';
import { Sun } from 'lucide-react';

interface DailyViewProps {
  plan: WeeklyPlan;
  language: Language;
  dayIndex: number;
}

const DailyView: React.FC<DailyViewProps> = ({ plan, language, dayIndex }) => {
  // Use the passed dayIndex to select the plan
  const todayPlan = plan.days[dayIndex];
  
  // State to force re-render on minute change for time-sensitive UI
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 60000); // Update every minute
    return () => clearInterval(timer);
  }, []);

  if (!todayPlan) return <div className="p-4 text-center">No Plan Available for Day {dayIndex + 1}</div>;

  const getDisplayDate = () => {
    const date = new Date();
    const currentDay = date.getDay(); // 0 = Sun, 1 = Mon
    const normalizedCurrent = currentDay === 0 ? 6 : currentDay - 1;
    const diff = dayIndex - normalizedCurrent;
    date.setDate(date.getDate() + diff);
    const localeMap = { en: 'en-IN', hi: 'hi-IN', te: 'te-IN' };
    return date.toLocaleDateString(localeMap[language], { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  };

  const getTodayIndex = () => {
    const day = new Date().getDay();
    return day === 0 ? 6 : day - 1;
  };

  const isToday = dayIndex === getTodayIndex();
  const currentHour = now.getHours();

  const isMealActive = (type: string) => {
    if (!isToday) return false;
    // Breakfast: 4 AM - 11 AM
    if (type === 'breakfast' && currentHour >= 4 && currentHour < 11) return true;
    // Lunch: 11 AM - 4 PM
    if (type === 'lunch' && currentHour >= 11 && currentHour < 16) return true;
    // Dinner: 4 PM - 11 PM
    if (type === 'dinner' && currentHour >= 16 && currentHour < 23) return true;
    return false;
  };

  return (
    <div className="max-w-md mx-auto p-4 pb-24">
      {/* Date Header */}
      <div className="flex items-center gap-2 mb-6">
        <Sun className="w-6 h-6 text-amber-500" />
        <div>
          <h2 className="text-2xl font-bold text-slate-900">{UI_TRANSLATIONS.today[language]}</h2>
          <p className="text-slate-500 text-sm font-medium">{getDisplayDate()}</p>
        </div>
      </div>

      {/* Prep for Tomorrow Component */}
      <PrepCard tasks={todayPlan.prepTimeline} language={language} />

      {/* Meals List */}
      <div className="space-y-4">
        {todayPlan.meals.map(meal => {
          const active = isMealActive(meal.type);
          return (
            <MealCard 
              key={meal.id} 
              meal={meal} 
              language={language} 
              defaultExpanded={active}
              isCurrent={active}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DailyView;