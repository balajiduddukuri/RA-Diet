/**
 * Supported languages for the application localization.
 * en: English, hi: Hindi, te: Telugu
 */
export type Language = 'en' | 'hi' | 'te';

/**
 * Available diet plan types.
 */
export type DietType = 'north_indian' | 'south_indian' | 'continental';

/**
 * Dietary preference options for filtering meal plans.
 */
export type DietaryPreference = 'veg' | 'non_veg';

/**
 * Structure for localized strings in all supported languages.
 */
export interface LocalizedString {
  en: string;
  hi: string;
  te: string;
}

/**
 * Represents an ingredient with name and quantity.
 */
export interface Ingredient {
  name: LocalizedString;
  qty: LocalizedString;
}

/**
 * Represents a single meal within a daily plan.
 */
export interface Meal {
  id: string;
  type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  title: LocalizedString;
  calories: number; // Estimated calories per serving
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  tags: string[]; // e.g., "High Omega-3", "Turmeric"
  ingredients: Ingredient[];
  steps: LocalizedString[];
  nutritionNote?: LocalizedString;
  isNonVeg?: boolean; // Flag to indicate if the meal contains meat/fish/egg
  vegAlternative?: Meal; // Vegetarian alternative for non-veg meals
}

/**
 * Represents a preparation task to be done in advance.
 */
export interface PrepTask {
  id: string;
  time: string; // "19:00"
  task: LocalizedString;
  isCompleted?: boolean;
}

/**
 * Represents a full day's meal plan including prep tasks.
 */
export interface DayPlan {
  date: string; // ISO format YYYY-MM-DD
  dayName: LocalizedString;
  meals: Meal[];
  prepTimeline: PrepTask[]; // Tasks to do TODAY for tomorrow
}

/**
 * Represents the structure of a weekly meal plan.
 */
export interface WeeklyPlan {
  weekStart: string;
  days: DayPlan[];
}

/**
 * Application view states for navigation.
 */
export type ViewState = 'daily' | 'weekly' | 'grocery' | 'settings';