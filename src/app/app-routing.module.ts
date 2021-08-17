import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeAppComponent } from './angular-course/recipe-app/app.component';
import { ErrorPageComponent } from './angular-course/recipe-app/error-page/error-page.component';
import { NotFoundComponent } from './angular-course/recipe-app/not-found/not-found.component';
import { RecipeDetailComponent } from './angular-course/recipe-app/recipes/detail/detail.component';
import { RecipeListComponent } from './angular-course/recipe-app/recipes/list/list.component';

import { RecipesComponent } from './angular-course/recipe-app/recipes/recipes.component';
import { RecipeStartComponent } from './angular-course/recipe-app/recipes/start/start.component';
import { RecipeShoppingListComponent } from './angular-course/recipe-app/shopping-list/shopping-list.component';
import { AuthGuard } from './auth-guard.service';

const appRoutes: Routes = [
  { path: "", component: RecipesComponent },
  //{ path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes', component: RecipesComponent, 
    children: [
      { path: '', component: RecipeStartComponent },
      { path: ':id', component: RecipeDetailComponent }
    ]
  },
  { path: 'shopping-list', 
    // canActivate: [AuthGuard], 
    canActivateChild: [AuthGuard],
    component: RecipeShoppingListComponent 
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'error', component: ErrorPageComponent, data: { message: "Something wrong happened!" } },
  { path: '**', redirectTo: '/not-found' }
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true })
    // RouterModule.forRoot(appRoutes, { useHash: true }) // For Production Use
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
