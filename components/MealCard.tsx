import React, { useState } from 'react';
import { Meal, Language } from '../types';
import { UI_TRANSLATIONS } from '../constants';
import { Clock, ChefHat, Info, ChevronDown, ChevronUp } from 'lucide-react';

interface MealCardProps {
  meal: Meal;
  language: Language;
}

const MealCard: React.FC<MealCardProps> = ({ meal, language }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-4 transition-all hover:shadow-md">
      {/* Card Header (Always Visible) */}
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left p-4 focus:outline-none focus:bg-slate-50"
        aria-expanded={isExpanded}
      >
        <div className="flex justify-between items-start">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1 block">
              {meal.type}
            </span>
            <h3 className="text-lg font-bold text-slate-900 leading-tight mb-2">
              {meal.title[language]}
            </h3>
          </div>
          {isExpanded ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          {meal.tags.map(tag => (
            <span key={tag} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{UI_TRANSLATIONS.prepTime[language]}: {meal.prepTimeMinutes}{UI_TRANSLATIONS.mins[language]}</span>
          </div>
          <div className="flex items-center gap-1">
            <ChefHat className="w-4 h-4" />
            <span>{UI_TRANSLATIONS.cookTime[language]}: {meal.cookTimeMinutes}{UI_TRANSLATIONS.mins[language]}</span>
          </div>
        </div>
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="px-4 pb-4 border-t border-slate-100 bg-slate-50/50">
          {meal.nutritionNote && (
            <div className="mt-3 p-3 bg-blue-50 text-blue-800 rounded-lg text-sm flex gap-2 items-start">
              <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-xs uppercase mb-1">{UI_TRANSLATIONS.nutritionTip[language]}</p>
                <p>{meal.nutritionNote[language]}</p>
              </div>
            </div>
          )}

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">{UI_TRANSLATIONS.ingredients[language]}</h4>
              <ul className="space-y-1 text-sm text-slate-700">
                {meal.ingredients.map((ing, idx) => (
                  <li key={idx} className="flex justify-between border-b border-slate-200 border-dashed pb-1 last:border-0">
                    <span>{ing.name[language]}</span>
                    <span className="font-medium text-slate-500">{ing.qty[language]}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">{UI_TRANSLATIONS.instructions[language]}</h4>
              <ol className="list-decimal list-outside pl-4 space-y-2 text-sm text-slate-700">
                {meal.steps.map((step, idx) => (
                  <li key={idx}>{step[language]}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default MealCard;
