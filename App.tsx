import React, { useState, useMemo } from 'react';
import { Language, ViewState, DietType, DietaryPreference } from './types';
import { PLANS } from './constants';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import DailyView from './components/DailyView';
import WeeklyView from './components/WeeklyView';
import GroceryView from './components/GroceryView';
import SettingsView from './components/SettingsView';

const App: React.FC = () => {
  // Get current day of week (0=Mon, 6=Sun) to match plan structure
  const getCurrentDayIndex = () => {
    const day = new Date().getDay();
    return day === 0 ? 6 : day - 1;
  };

  const [language, setLanguage] = useState<Language>('te');
  const [currentView, setCurrentView] = useState<ViewState>('daily');
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(getCurrentDayIndex());
  const [dietType, setDietType] = useState<DietType>('north_indian');
  const [dietaryPreference, setDietaryPreference] = useState<DietaryPreference>('non_veg');

  const handleDaySelect = (index: number) => {
    setSelectedDayIndex(index);
    setCurrentView('daily');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Derive the current plan based on diet type and dietary preference
  const currentPlan = useMemo(() => {
    const rawPlan = PLANS[dietType];
    
    // If user allows non-veg, return plan as is
    if (dietaryPreference === 'non_veg') return rawPlan;

    // If preference is 'veg', replace non-veg meals with their alternatives
    return {
      ...rawPlan,
      days: rawPlan.days.map(day => ({
        ...day,
        meals: day.meals.map(meal => {
          if (meal.isNonVeg && meal.vegAlternative) {
            // Swap with vegetarian alternative
            return { 
              ...meal.vegAlternative, 
              // Keep original ID to ensure keys remain stable if needed, 
              // or use alt ID. Using alt ID is safer for uniqueness.
              id: meal.vegAlternative.id || `${meal.id}_veg` 
            };
          }
          return meal;
        })
      }))
    };
  }, [dietType, dietaryPreference]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header language={language} />
      
      <main className="pt-2 pb-20">
        {currentView === 'daily' && (
          <DailyView 
            plan={currentPlan} 
            language={language} 
            dayIndex={selectedDayIndex}
          />
        )}
        {currentView === 'weekly' && (
          <WeeklyView 
            plan={currentPlan} 
            language={language} 
            onDaySelect={handleDaySelect}
          />
        )}
        {currentView === 'grocery' && (
          <GroceryView
            plan={currentPlan}
            language={language}
          />
        )}
        {currentView === 'settings' && (
          <SettingsView
            currentDiet={dietType}
            setDiet={setDietType}
            language={language}
            setLanguage={setLanguage}
            dietaryPreference={dietaryPreference}
            setDietaryPreference={setDietaryPreference}
          />
        )}
      </main>

      <BottomNav 
        view={currentView} 
        setView={setCurrentView} 
        language={language} 
      />
    </div>
  );
};

export default App;