import React, { useState } from 'react';
import { Language, ViewState, DietType } from './types';
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

  const handleDaySelect = (index: number) => {
    setSelectedDayIndex(index);
    setCurrentView('daily');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentPlan = PLANS[dietType];

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