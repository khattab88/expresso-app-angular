import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'recipe-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class RecipeAppComponent implements OnInit {
  currentView: string = 'recipes';

  constructor() { }

  ngOnInit(): void {
  }

  onViewChanged(viewName: string): void {
    this.currentView = viewName;
  }

}
