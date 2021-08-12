import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'recipe-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class RecipeHeaderComponent implements OnInit {
  @Output() viewChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(viewName: string): void {
    this.viewChanged.emit(viewName)
  }

}
