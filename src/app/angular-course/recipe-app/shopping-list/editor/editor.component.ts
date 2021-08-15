import { Component, ElementRef, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

import { Ingredient } from '../../shared/Ingredient.model';

@Component({
  selector: 'recipe-shopping-list-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class RecipeShoppingListEditorComponent implements OnInit {
  @ViewChild("nameInput") nameInputRef: ElementRef;
  @ViewChild("amountInput") amountInputRef: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;

    if(!ingredientName || !ingredientAmount) return;
    const newIngredient = new Ingredient(ingredientName, ingredientAmount);

    this.ingredientAdded.emit(newIngredient);
  }

}
