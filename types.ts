export type Language = 'en' | 'hi' | 'te';

export interface LocalizedString {
  en: string;
  hi: string;
  te: string;
}

export interface Ingredient {
  name: LocalizedString;
  qty: LocalizedString;
}

export interface Meal {
  id: string;
  type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  title: LocalizedString;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  tags: string[]; // e.g., "High Omega-3", "Turmeric"
  ingredients: Ingredient[];
  steps: LocalizedString[];
  nutritionNote?: LocalizedString;
}

export interface PrepTask {
  id: string;
  time: string; // "19:00"
  task: LocalizedString;
  isCompleted?: boolean;
}

export interface DayPlan {
  date: string; // ISO format YYYY-MM-DD
  dayName: LocalizedString;
  meals: Meal[];
  prepTimeline: PrepTask[]; // Tasks to do TODAY for tomorrow
}

export interface WeeklyPlan {
  weekStart: string;
  days: DayPlan[];
}

export type ViewState = 'daily' | 'weekly' | 'settings';
