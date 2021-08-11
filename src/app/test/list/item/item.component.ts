import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../../todo.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: Todo;
  @Output() itemClickEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onItemClicked(value: string) {
    this.itemClickEvent.emit(value);
  }

}
