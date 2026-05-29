
export type MacroNutrients = {
  calories: number;
  // These 3 are in grams
  protein: number;  
  carbs: number;    
  fat: number;      
};

export type FoodItem = {
  name: string;
  estimated_grams: number;
} & MacroNutrients;

export type ClaudeAnalysisResult = {
  foods: FoodItem[];
  totals: MacroNutrients;
  confidence: 'high' | 'medium' | 'low';
};

export type Meal = {
  id: string;
  user_id: string;
  logged_at: string;       // ISO timestamp
  image_url?: string;
  analysis: ClaudeAnalysisResult;
  notes?: string;
};

export type DailyGoals = {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
};

export type DailyProgress = {
  date: string;            // YYYY-MM-DD
  totals: MacroNutrients;
  goals: DailyGoals;
  meals: Meal[];
};