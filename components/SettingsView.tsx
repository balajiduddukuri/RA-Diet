import React from 'react';
import { DietType, Language, DietaryPreference } from '../types';
import { UI_TRANSLATIONS } from '../constants';
import { Utensils, Check, Languages, Leaf } from 'lucide-react';

interface SettingsViewProps {
  currentDiet: DietType;
  setDiet: (diet: DietType) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  dietaryPreference: DietaryPreference;
  setDietaryPreference: (pref: DietaryPreference) => void;
}

const SettingsView: React.FC<SettingsViewProps> = ({ 
  currentDiet, 
  setDiet, 
  language, 
  setLanguage,
  dietaryPreference,
  setDietaryPreference
}) => {
  const diets: { id: DietType; labelKey: string }[] = [
    { id: 'north_indian', labelKey: 'dietNorth' },
    { id: 'south_indian', labelKey: 'dietSouth' },
    { id: 'continental', labelKey: 'dietContinental' },
  ];

  const languages: { id: Language; label: string }[] = [
    { id: 'en', label: 'English' },
    { id: 'hi', label: 'हिंदी (Hindi)' },
    { id: 'te', label: 'తెలుగు (Telugu)' },
  ];

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="flex items-center gap-2 mb-6">
        <Utensils className="w-6 h-6 text-purple-600" />
        <h2 className="text-2xl font-bold text-slate-900">{UI_TRANSLATIONS.navSettings[language]}</h2>
      </div>

      <div className="space-y-6">
        {/* Diet Selection */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-4 border-b border-slate-100 bg-slate-50">
            <h3 className="font-semibold text-slate-900">{UI_TRANSLATIONS.selectDiet[language]}</h3>
          </div>
          <div>
            {diets.map((diet) => (
              <button
                key={diet.id}
                onClick={() => setDiet(diet.id)}
                className="w-full flex items-center justify-between p-4 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors focus:outline-none focus:bg-slate-50"
              >
                <span className={`font-medium ${currentDiet === diet.id ? 'text-emerald-700' : 'text-slate-700'}`}>
                  {UI_TRANSLATIONS[diet.labelKey][language]}
                </span>
                {currentDiet === diet.id && (
                  <Check className="w-5 h-5 text-emerald-600" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Dietary Preference (Veg / Non-Veg) */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center gap-2">
            <Leaf className="w-4 h-4 text-slate-500" />
            <h3 className="font-semibold text-slate-900">{UI_TRANSLATIONS.dietaryPref[language]}</h3>
          </div>
          <div className="flex divide-x divide-slate-100">
            <button
              onClick={() => setDietaryPreference('veg')}
              className={`flex-1 p-4 flex flex-col items-center gap-2 transition-colors focus:outline-none ${
                dietaryPreference === 'veg' ? 'bg-emerald-50 text-emerald-800' : 'hover:bg-slate-50 text-slate-600'
              }`}
            >
              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                dietaryPreference === 'veg' ? 'border-emerald-600' : 'border-slate-300'
              }`}>
                {dietaryPreference === 'veg' && <div className="w-2 h-2 rounded-full bg-emerald-600" />}
              </div>
              <span className="text-sm font-medium">{UI_TRANSLATIONS.vegOnly[language]}</span>
            </button>
            
            <button
              onClick={() => setDietaryPreference('non_veg')}
              className={`flex-1 p-4 flex flex-col items-center gap-2 transition-colors focus:outline-none ${
                dietaryPreference === 'non_veg' ? 'bg-emerald-50 text-emerald-800' : 'hover:bg-slate-50 text-slate-600'
              }`}
            >
              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                dietaryPreference === 'non_veg' ? 'border-emerald-600' : 'border-slate-300'
              }`}>
                {dietaryPreference === 'non_veg' && <div className="w-2 h-2 rounded-full bg-emerald-600" />}
              </div>
              <span className="text-sm font-medium">{UI_TRANSLATIONS.nonVegIncluded[language]}</span>
            </button>
          </div>
        </div>

        {/* Language Selection */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center gap-2">
            <Languages className="w-4 h-4 text-slate-500" />
            <h3 className="font-semibold text-slate-900">{UI_TRANSLATIONS.selectLanguage[language]}</h3>
          </div>
          <div>
            {languages.map((lang) => (
              <button
                key={lang.id}
                onClick={() => setLanguage(lang.id)}
                className="w-full flex items-center justify-between p-4 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors focus:outline-none focus:bg-slate-50"
              >
                <span className={`font-medium ${language === lang.id ? 'text-emerald-700' : 'text-slate-700'}`}>
                  {lang.label}
                </span>
                {language === lang.id && (
                  <Check className="w-5 h-5 text-emerald-600" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="text-center pt-8 pb-4">
          <p className="text-xs text-slate-400 font-medium">
            {UI_TRANSLATIONS.author[language]}: <a href="https://www.threads.net/@mr.dbalaji" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 hover:underline transition-colors">Balaji Duddukuri</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SettingsView;