import React, { useState } from 'react';
import { PrepTask, Language } from '../types';
import { UI_TRANSLATIONS } from '../constants';
import { CalendarClock, CheckCircle, Circle } from 'lucide-react';

interface PrepCardProps {
  tasks: PrepTask[];
  language: Language;
}

const PrepCard: React.FC<PrepCardProps> = ({ tasks, language }) => {
  // Local state to simulate checking off items in demo mode
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());

  const toggleTask = (id: string) => {
    const newSet = new Set(completedTasks);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setCompletedTasks(newSet);
  };

  if (tasks.length === 0) return null;

  return (
    <section className="bg-indigo-50 rounded-xl border border-indigo-100 p-4 mt-8" aria-labelledby="prep-heading">
      <div className="flex items-center gap-2 mb-3">
        <CalendarClock className="w-5 h-5 text-indigo-600" />
        <h2 id="prep-heading" className="text-lg font-bold text-indigo-900">
          {UI_TRANSLATIONS.tomorrowPrep[language]}
        </h2>
      </div>
      
      <div className="space-y-2">
        {tasks.map((task) => {
          const isDone = completedTasks.has(task.id);
          return (
            <button
              key={task.id}
              onClick={() => toggleTask(task.id)}
              className={`w-full flex items-start gap-3 p-3 rounded-lg border transition-all text-left group ${
                isDone 
                  ? 'bg-indigo-100 border-transparent text-indigo-400 line-through' 
                  : 'bg-white border-indigo-200 shadow-sm hover:border-indigo-300'
              }`}
              aria-checked={isDone}
              role="checkbox"
            >
              <div className={`mt-0.5 flex-shrink-0 ${isDone ? 'text-indigo-400' : 'text-indigo-600 group-hover:text-indigo-700'}`}>
                {isDone ? <CheckCircle className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
              </div>
              <div>
                <span className={`text-xs font-bold block mb-0.5 ${isDone ? 'text-indigo-400' : 'text-indigo-600'}`}>
                  {task.time}
                </span>
                <span className={`text-sm ${isDone ? 'text-indigo-400' : 'text-slate-700'}`}>
                  {task.task[language]}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default PrepCard;