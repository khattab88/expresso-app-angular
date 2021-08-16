import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../../shared/services/recipe.service';
import { LogService } from 'src/app/angular-course/services/log.service';

@Component({
  selector: 'recipe-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [
    LogService
  ]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor(private logService: LogService,
              private recipeService: RecipeService,
              private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipeService.getRecipes()
          .subscribe(recipes => this.recipes = recipes);
  }

  onRecipeSelected(recipe: Recipe): void {
    this.logService.logToConsole("Recipe selected: " + recipe.name);

    this.recipeSelected.emit(recipe);
  }

  navigate() {
    this.router.navigate(['shopping-list']);
    // this.router.navigate(['shopping-list', { relativeTo: this.route }]);
  }

}
