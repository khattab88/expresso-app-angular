import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'game-control-app',
  templateUrl: './game-control-app.component.html',
  styleUrls: ['./game-control-app.component.scss']
})
export class GameControlAppComponent implements OnInit {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  

  constructor() { }

  ngOnInit(): void {
  }

  onIntervalFired(lastNumber: number): void {
    console.log('onIntervalFired: Last Number = ' + lastNumber);

    if(lastNumber % 2 === 0) {
      this.evenNumbers.push(lastNumber);
    } else {
      this.oddNumbers.push(lastNumber);
    }
  }

}
