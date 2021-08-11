import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../../todo.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input('todo') item: Todo;
  @Output() itemClickedEvent = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit(): void {
  }

  onItemClicked(value: Todo) {
    this.itemClickedEvent.emit(value);
  }

}
