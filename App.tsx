import React, { useState } from 'react';
import { Language, ViewState } from './types';
import { MOCK_WEEKLY_PLAN } from './constants';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import DailyView from './components/DailyView';
import WeeklyView from './components/WeeklyView';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');
  const [currentView, setCurrentView] = useState<ViewState>('daily');
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(0);

  const handleDaySelect = (index: number) => {
    setSelectedDayIndex(index);
    setCurrentView('daily');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header language={language} setLanguage={setLanguage} />
      
      <main className="pt-2 pb-20">
        {currentView === 'daily' && (
          <DailyView 
            plan={MOCK_WEEKLY_PLAN} 
            language={language} 
            dayIndex={selectedDayIndex}
          />
        )}
        {currentView === 'weekly' && (
          <WeeklyView 
            plan={MOCK_WEEKLY_PLAN} 
            language={language} 
            onDaySelect={handleDaySelect}
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