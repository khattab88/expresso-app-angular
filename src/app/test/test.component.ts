import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  isActive: boolean;
  items: string[];

  constructor() {
   }

  ngOnInit(): void {
    this.isActive = Math.random() > .5 ?true :false; 
    this.items = ["ali", "omar", "ahmed"];
  }

}
