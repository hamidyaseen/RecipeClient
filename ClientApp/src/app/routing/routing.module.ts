import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { SearchRecipeComponent } from '../search-recipe/search-recipe.component';
import { CounterComponent } from '../counter/counter.component';
import { FetchDataComponent } from '../fetch-data/fetch-data.component';
import { RecipeComponent } from '../search-recipe/recipe/recipe.component';

const routes: Routes = [
  { path: '', component: SearchRecipeComponent, pathMatch: 'full' },
  { path: 'recipe/:recipeId', component: RecipeComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent },
];


@NgModule({
  declarations: [HomeComponent, CounterComponent, FetchDataComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
