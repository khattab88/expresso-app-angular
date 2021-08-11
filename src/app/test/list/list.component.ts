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
      new Todo(2, "item 2", true),
      new Todo(3, "item 3", true),
    ];
  }

  onItemClicked(value: Todo) {
    window.alert(`${value.name}, status is ${value.done} has been clicked!`);
  }

  onItemCreated(value: string) {
    let id = Math.max(...this.items.map(i => i.id)) + 1;
    this.items.push(new Todo(id, value));
  }

}
