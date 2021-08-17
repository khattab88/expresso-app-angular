import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './angular-course/recipe-app/not-found/not-found.component';
import { RecipeDetailComponent } from './angular-course/recipe-app/recipes/detail/detail.component';
import { RecipeListComponent } from './angular-course/recipe-app/recipes/list/list.component';

import { RecipesComponent } from './angular-course/recipe-app/recipes/recipes.component';
import { RecipeShoppingListComponent } from './angular-course/recipe-app/shopping-list/shopping-list.component';
import { AuthGuard } from './auth-guard.service';

const appRoutes: Routes = [
  { path: '', component: RecipesComponent },
  {
    path: 'recipes', component: RecipeListComponent, 
    children: [
      { path: ':name', component: RecipeDetailComponent }, // Invalid Route
    ]
  },
  { path: 'shopping-list', 
    // canActivate: [AuthGuard], 
    canActivateChild: [AuthGuard],
    component: RecipeShoppingListComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
