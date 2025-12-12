import React from 'react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../constants';
import { BookOpen, CalendarCheck, ShoppingBasket, Sparkles, CalendarClock, MessageCircle } from 'lucide-react';

interface GuideViewProps {
  language: Language;
}

const GuideView: React.FC<GuideViewProps> = ({ language }) => {
  return (
    <div className="max-w-md mx-auto p-4 pb-24">
      <div className="flex items-center gap-2 mb-6">
        <BookOpen className="w-6 h-6 text-indigo-600" />
        <h2 className="text-2xl font-bold text-slate-900">{UI_TRANSLATIONS.guideTitle[language]}</h2>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 mb-6">
        <p className="text-slate-600 leading-relaxed">
          {UI_TRANSLATIONS.guideIntro[language]}
        </p>
      </div>

      <div className="space-y-6">
        {/* Step 1: Daily Meals */}
        <section className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
            <CalendarCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-1">{UI_TRANSLATIONS.guideDailyTitle[language]}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {UI_TRANSLATIONS.guideDailyDesc[language]}
            </p>
          </div>
        </section>

        {/* Step 2: Prep */}
        <section className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
            <CalendarClock className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-1">{UI_TRANSLATIONS.guidePrepTitle[language]}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {UI_TRANSLATIONS.guidePrepDesc[language]}
            </p>
          </div>
        </section>

        {/* Step 3: Grocery */}
        <section className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
            <ShoppingBasket className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-1">{UI_TRANSLATIONS.guideGroceryTitle[language]}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {UI_TRANSLATIONS.guideGroceryDesc[language]}
            </p>
          </div>
        </section>

        {/* Step 4: AI */}
        <section className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-1">{UI_TRANSLATIONS.guideAiTitle[language]}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {UI_TRANSLATIONS.guideAiDesc[language]}
            </p>
          </div>
        </section>
      </div>

      <div className="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-100 text-center">
        <p className="text-xs text-slate-500 font-medium">
          RA Diet App v1.0.0
        </p>
      </div>
    </div>
  );
};

export default GuideView;