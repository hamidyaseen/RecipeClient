import { Component, OnInit } from '@angular/core';
import { RecipeDataService } from '../recipe-data.service';
import { RecipeJsonService } from '../recipe-json.service';
import { MarkedRecipe } from '../recipes/MarkedRecipe';

@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.css']
})
export class SearchRecipeComponent implements OnInit {

  public searchValue: string;
  public markedRecipes: MarkedRecipe[];

  constructor(private recipeData: RecipeDataService, private recipeJsonData: RecipeJsonService) { }

  ngOnInit(): void {
    
  }
  public search(input: HTMLInputElement) {
    this.searchValue = input.value;    
    this.recipeData.getNextPageRecipes(this.searchValue).subscribe((result) => {
      this.markedRecipes = result;
      input.value = '';
    },
      error => {
        console.error(error);
        this.markedRecipes = this.recipeJsonData.hits;
      }
    );    
  }
}
