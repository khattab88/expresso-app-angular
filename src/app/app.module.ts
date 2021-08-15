import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

import { RecipeAppComponent } from './angular-course/recipe-app/app.component';
import { RecipeHeaderComponent } from './angular-course/recipe-app/header/header.component';
import { RecipeListComponent } from './angular-course/recipe-app/recipes/list/list.component';
import { RecipeDetailComponent } from './angular-course/recipe-app/recipes/detail/detail.component';
import { RecipeListItemComponent } from './angular-course/recipe-app/recipes/list/list-item/list-item.component';
import { RecipeShoppingListComponent } from './angular-course/recipe-app/shopping-list/shopping-list.component';
import { RecipeShoppingListEditorComponent } from './angular-course/recipe-app/shopping-list/editor/editor.component';
import { RecipesComponent } from './angular-course/recipe-app/recipes/recipes.component';
import { ListComponent } from './test/list/list.component';
import { ItemComponent } from './test/list/item/item.component';
import { InputComponent } from './test/list/input/input.component';
import { GameControlAppComponent } from './angular-course/game-control-app/game-control-app.component';
import { GameControlComponent } from './angular-course/game-control-app/game-control/game-control.component';
import { OddComponent } from './angular-course/game-control-app/odd/odd.component';
import { EvenComponent } from './angular-course/game-control-app/even/even.component';

import { BasicHighlightDirective } from './angular-course/basic-highlight/basic-highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    RecipeHeaderComponent,
    RecipeAppComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeListItemComponent,
    RecipeShoppingListComponent,
    RecipeShoppingListEditorComponent,
    RecipesComponent,
    ListComponent,
    ItemComponent,
    InputComponent,
    GameControlAppComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    BasicHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
