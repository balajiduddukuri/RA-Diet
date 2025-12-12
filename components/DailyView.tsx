import React, { useEffect, useState } from 'react';
import { Language, WeeklyPlan } from '../types';
import { UI_TRANSLATIONS, MOTIVATIONAL_QUOTES } from '../constants';
import MealCard from './MealCard';
import PrepCard from './PrepCard';
import { Sun, Quote, Sparkles, MessageCircle, Share2 } from 'lucide-react';

interface DailyViewProps {
  plan: WeeklyPlan;
  language: Language;
  dayIndex: number;
  onOpenChat: () => void;
}

/**
 * DailyView Component
 * 
 * Displays the meal plan for a specific day.
 * Features:
 * - Highlights current meal based on time of day
 * - Shows prep tasks for the next day
 * - Displays a daily motivational quote
 */
const DailyView: React.FC<DailyViewProps> = ({ plan, language, dayIndex, onOpenChat }) => {
  // Use the passed dayIndex to select the plan
  const todayPlan = plan.days[dayIndex];
  
  // State to force re-render on minute change for time-sensitive UI
  const [now, setNow] = useState(new Date());

  // Update time every minute to keep "Current Meal" status accurate
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 60000); 
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

  // Helper to determine if a meal is currently active based on time ranges
  const isMealActive = (type: string) => {
    if (!isToday) return false;
    const h = currentHour;
    // Breakfast: 4 AM - 11 AM
    if (type === 'breakfast') return h >= 4 && h < 11;
    // Lunch: 11 AM - 3 PM
    if (type === 'lunch') return h >= 11 && h < 15;
    // Snack: 3 PM - 7 PM (15:00 - 19:00)
    if (type === 'snack') return h >= 15 && h < 19;
    // Dinner: 7 PM - 11 PM (19:00 - 23:00)
    if (type === 'dinner') return h >= 19 && h < 23;
    return false;
  };

  const handleShare = async () => {
    const mealSummary = todayPlan.meals.map(m => 
      `${m.type.toUpperCase()}: ${m.title[language]} (${m.calories} kcal)`
    ).join('\n');

    const shareData = {
      title: UI_TRANSLATIONS.today[language],
      text: `${UI_TRANSLATIONS.today[language]} - ${getDisplayDate()}\n\n${mealSummary}\n\nShared via RA Diet App`
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing', err);
      }
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(shareData.text);
      alert(UI_TRANSLATIONS.copied[language]);
    }
  };

  // Select quote based on day index to rotate daily
  const dailyQuote = MOTIVATIONAL_QUOTES[dayIndex % MOTIVATIONAL_QUOTES.length];

  return (
    <div className="max-w-md mx-auto p-4 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Sun className="w-6 h-6 text-amber-500" />
          <div>
            <h2 className="text-2xl font-bold text-slate-900">{UI_TRANSLATIONS.today[language]}</h2>
            <p className="text-slate-500 text-sm font-medium">{getDisplayDate()}</p>
          </div>
        </div>
        <button
          onClick={handleShare}
          className="p-2 bg-emerald-50 text-emerald-700 rounded-full hover:bg-emerald-100 active:scale-95 transition-transform"
          aria-label="Share plan"
        >
          <Share2 className="w-5 h-5" />
        </button>
      </div>

      {/* Motivational Quote */}
      <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 mb-6 relative overflow-hidden">
        <Quote className="absolute top-2 right-2 w-8 h-8 text-emerald-100 rotate-12" />
        <div className="relative z-10">
          <p className="text-emerald-800 font-medium italic text-sm leading-relaxed">
            "{dailyQuote[language]}"
          </p>
        </div>
      </div>

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

      {/* Prep for Tomorrow Component */}
      <PrepCard tasks={todayPlan.prepTimeline} language={language} />

      {/* Ask AI Card */}
      <button 
        onClick={onOpenChat}
        className="w-full mt-6 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-xl p-5 shadow-lg shadow-emerald-600/20 text-white flex items-center justify-between group active:scale-[0.98] transition-all"
      >
        <div className="text-left">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-4 h-4 text-emerald-200" />
            <h3 className="font-bold text-lg leading-none">{UI_TRANSLATIONS.askAiBtn[language]}</h3>
          </div>
          <p className="text-emerald-100 text-sm font-medium opacity-90">{UI_TRANSLATIONS.askAiDesc[language]}</p>
        </div>
        <div className="bg-white/20 p-2.5 rounded-full backdrop-blur-sm group-hover:bg-white/30 transition-colors">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>
      </button>
    </div>
  );
};

export default DailyView;