import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../../shared/services/recipe.service';


@Component({
  selector: 'recipe-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    // const name = this.route.snapshot.params["name"];
    // console.log(`${name} detail`);

    console.log(this.recipe);
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
