import { Recipe } from "./Recipe";

export interface MarkedRecipe {
  recipe: Recipe;
  bookmarked: boolean;
  bought: boolean;
}
