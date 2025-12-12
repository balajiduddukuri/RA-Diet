import React from 'react';
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

  if (!todayPlan) return <div className="p-4 text-center">No Plan Available for Day {dayIndex + 1}</div>;

  return (
    <div className="max-w-md mx-auto p-4 pb-24">
      {/* Date Header */}
      <div className="flex items-center gap-2 mb-6">
        <Sun className="w-6 h-6 text-amber-500" />
        <div>
          <h2 className="text-2xl font-bold text-slate-900">{UI_TRANSLATIONS.today[language]}</h2>
          <p className="text-slate-500 text-sm font-medium">{todayPlan.dayName[language]}, {todayPlan.date}</p>
        </div>
      </div>

      {/* Prep for Tomorrow Component */}
      <PrepCard tasks={todayPlan.prepTimeline} language={language} />

      {/* Meals List */}
      <div className="space-y-4">
        {todayPlan.meals.map(meal => (
          <MealCard key={meal.id} meal={meal} language={language} />
        ))}
      </div>
    </div>
  );
};

export default DailyView;