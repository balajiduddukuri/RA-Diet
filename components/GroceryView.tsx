import React, { useMemo, useState } from 'react';
import { WeeklyPlan, Language } from '../types';
import { UI_TRANSLATIONS } from '../constants';
import { ShoppingBasket, Copy, Check, Share2 } from 'lucide-react';

interface GroceryViewProps {
  plan: WeeklyPlan;
  language: Language;
}

const GroceryView: React.FC<GroceryViewProps> = ({ plan, language }) => {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [copied, setCopied] = useState(false);

  // Aggregate ingredients from all meals
  const aggregatedIngredients = useMemo(() => {
    const map = new Map<string, string[]>();
    
    plan.days.forEach(day => {
      day.meals.forEach(meal => {
        meal.ingredients.forEach(ing => {
          const name = ing.name[language];
          const qty = ing.qty[language];
          if (!map.has(name)) {
            map.set(name, []);
          }
          map.get(name)?.push(qty);
        });
      });
    });

    return Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  }, [plan, language]);

  const toggleItem = (name: string) => {
    const newSet = new Set(checkedItems);
    if (newSet.has(name)) {
      newSet.delete(name);
    } else {
      newSet.add(name);
    }
    setCheckedItems(newSet);
  };

  const getListText = () => {
    const text = aggregatedIngredients
      .map(([name, qtys]) => `- ${name} (${qtys.join(', ')})`)
      .join('\n');
    return `${UI_TRANSLATIONS.groceryList[language]}\n\n${text}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getListText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    const shareData = {
      title: UI_TRANSLATIONS.groceryList[language],
      text: `${getListText()}\n\nShared via RA Diet App`
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing', err);
      }
    } else {
      handleCopy();
      // Optionally notify user that sharing wasn't supported so we copied instead
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 pb-24">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <ShoppingBasket className="w-6 h-6 text-emerald-600" />
          <h2 className="text-2xl font-bold text-slate-900">{UI_TRANSLATIONS.groceryList[language]}</h2>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={handleCopy}
            className="flex items-center justify-center p-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 active:scale-95 transition-all"
            aria-label="Copy to clipboard"
          >
            {copied ? <Check className="w-5 h-5 text-emerald-600" /> : <Copy className="w-5 h-5" />}
          </button>
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 text-white rounded-lg text-sm font-medium active:scale-95 transition-transform"
          >
            <Share2 className="w-4 h-4" />
            <span>{UI_TRANSLATIONS.share[language]}</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {aggregatedIngredients.length === 0 ? (
          <div className="p-8 text-center text-slate-500">
            No ingredients found in the current plan.
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {aggregatedIngredients.map(([name, qtys]) => {
              const isChecked = checkedItems.has(name);
              return (
                <button
                  key={name}
                  onClick={() => toggleItem(name)}
                  className={`w-full text-left p-4 flex items-start gap-3 transition-colors hover:bg-slate-50 ${isChecked ? 'bg-slate-50' : ''}`}
                >
                  <div className={`mt-0.5 w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 transition-colors ${
                    isChecked ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-300 bg-white'
                  }`}>
                    {isChecked && <Check className="w-3.5 h-3.5" />}
                  </div>
                  <div>
                    <span className={`font-medium block ${isChecked ? 'text-slate-400 line-through' : 'text-slate-900'}`}>
                      {name}
                    </span>
                    <span className={`text-xs block mt-0.5 ${isChecked ? 'text-slate-300' : 'text-slate-500'}`}>
                      {qtys.join(' + ')}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default GroceryView;