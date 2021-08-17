import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

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

import { BasicHighlightDirective } from './angular-course/directives/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './angular-course/directives/better-highlight/better-highlight.directive';
import { UnlessDirective } from './angular-course/directives/unless/unless.directive';
import { DropdownDirective } from './angular-course/recipe-app/shared/dropdown.directive';
import { LogService } from './angular-course/services/log.service';
import { RecipeService } from './angular-course/recipe-app/shared/services/recipe.service';
import { ShoppingListService } from './angular-course/recipe-app/shared/services/shopping-list.service';
import { NotFoundComponent } from './angular-course/recipe-app/not-found/not-found.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { ErrorPageComponent } from './angular-course/recipe-app/error-page/error-page.component';


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
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    DropdownDirective,
    NotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    LogService,
    RecipeService,
    ShoppingListService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
