import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { RecipeHeaderComponent } from './angular-course/recipe-app/header/header.component';
import { RecipeAppComponent } from './angular-course/recipe-app/app.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    RecipeHeaderComponent,
    RecipeAppComponent,
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
