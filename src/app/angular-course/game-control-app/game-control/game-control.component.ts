import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval: any;
  lastNumber = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onGameStarted() {
    this.interval = setInterval(() =>{
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  onGamePaused() {
    clearInterval(this.interval);
  }

}
