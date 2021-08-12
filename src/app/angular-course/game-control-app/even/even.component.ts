import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'game-control-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.scss']
})
export class EvenComponent implements OnInit {
  @Input() number: number;

  constructor() { }

  ngOnInit(): void {
  }

}
