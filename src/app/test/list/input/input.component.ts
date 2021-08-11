import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  name: string;

  @Output() itemCreatedEvent = new EventEmitter<string>();
  @Output() itemDeletedEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onItemCreated(value: string) {
    if(!value) return;

    this.itemCreatedEvent.emit(value);
  }

  onItemDeleted(id: string) {
    if(!id) return;

    this.itemDeletedEvent.emit(id);
  }

}
