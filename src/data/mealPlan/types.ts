export interface PlanDay {
  day: string;
  breakfast: string;
  lunch: string;
  dinner: string;
  snack: string;
}

export interface ShoppingList {
  vegetables: string[];
  fruits: string[];
  proteins: string[];
  dairy: string[];
  grains: string[];
  pantry: string[];
}

export interface Recipe {
  name: string;
  age: string;
  prep: string;
  cook: string;
  ingredients: string[];
  steps: string[];
  serving: string;
  storage: string;
  freezing: string;
  texture: string;
}

export interface Week {
  number: number;
  title: string;
  intro: string;
  days: PlanDay[];
  shopping: ShoppingList;
  recipes: Recipe[];
}

export interface AgeGroup {
  id: string;
  title: string;
  subtitle: string;
  intro: string;
  milestones: string[];
  weeks: Week[];
}
