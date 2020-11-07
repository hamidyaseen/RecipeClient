import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RecipeDataService } from '../../recipe-data.service';
import { RecipeJsonService } from '../../recipe-json.service';
import { Recipe } from '../../recipes/Recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  public recipe: Recipe;
  constructor(private route: ActivatedRoute, private recipeData: RecipeJsonService) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const index = parseInt(params.get('recipeId'));
      if (index >=0)
        this.recipe = this.recipeData.hits[index].recipe;
    });
  }

  ngOnInit(): void {
    
  }

}
