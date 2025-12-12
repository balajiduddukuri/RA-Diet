import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../constants';
import { Clock, MapPin } from 'lucide-react';

interface HeaderProps {
  language: Language;
}

const Header: React.FC<HeaderProps> = ({ language }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [location, setLocation] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(`${position.coords.latitude.toFixed(2)}, ${position.coords.longitude.toFixed(2)}`);
        },
        (error) => {
          console.debug("Geolocation error:", error);
          setLocation("—");
        }
      );
    }
  }, []);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-md mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-emerald-700 tracking-tight">
          {UI_TRANSLATIONS.appTitle[language]}
        </h1>
        <div className="flex flex-col items-end text-xs text-slate-500 font-medium">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>
              {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
          <div className="flex items-center gap-1 mt-0.5">
            <MapPin className="w-3 h-3" />
            <span>
              {location ? location : UI_TRANSLATIONS.location[language]}
            </span>
          </div>
        </div>
      </div>
      <div className="bg-amber-100 text-amber-900 px-4 py-1 text-xs text-center font-medium" role="alert">
        {UI_TRANSLATIONS.demoMode[language]}
      </div>
    </header>
  );
};

export default Header;