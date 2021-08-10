import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

import { RecipeAppComponent } from './angular-course/recipe-app/app.component';
import { RecipeHeaderComponent } from './angular-course/recipe-app/header/header.component';
import { RecipeListComponent } from './angular-course/recipe-app/list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    RecipeHeaderComponent,
    RecipeAppComponent,
    RecipeListComponent,
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
