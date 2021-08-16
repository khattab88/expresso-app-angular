import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'recipe-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class RecipeListItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeClicked = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeClicked() {
    this.recipeClicked.emit(this.recipe);
  }

}
