import { Component, OnInit } from '@angular/core';

import { Todo } from '../todo.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  items: Todo[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      new Todo(1, "item 1"),
      new Todo(2, "item 2"),
      new Todo(3, "item 3"),
    ];
  }

  itemClicked(value: string) {
    window.alert(`${value} has been clicked!`);
  }

}
