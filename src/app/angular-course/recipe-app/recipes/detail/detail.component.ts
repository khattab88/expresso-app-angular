import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../../shared/services/recipe.service';


@Component({
  selector: 'recipe-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  id: number;
  recipe: Recipe;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

    this.route.params
      .subscribe((params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);

        this.recipeService.recipeSelecetd.next(this.recipe);
      });

  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipeClicked() {
    this.router.navigate(["edit"], { relativeTo: this.route });
  }

}
