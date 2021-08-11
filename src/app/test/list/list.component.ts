import { Component, OnChanges, OnInit, SimpleChanges, ViewEncapsulation, DoCheck } from '@angular/core';

import { Todo } from '../todo.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ListComponent implements OnInit, OnChanges {
  items: Todo[] = [];

  constructor() {
    console.log("constructor called");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit called")

    this.items = [
      new Todo(1, "item 1"),
      new Todo(2, "item 2", true),
      new Todo(3, "item 3", true),
    ];
  }

  ngDoCheck() {
    console.log("ngDoCheck called");
  }

  onItemClicked(value: Todo) {
    window.alert(`${value.name}, status is ${value.done} has been clicked!`);
  }

  onItemCreated(value: string) {
    let id = Math.max(...this.items.map(i => i.id)) + 1;
    this.items.push(new Todo(id, value));
  }

}
