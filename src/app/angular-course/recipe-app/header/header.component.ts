import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { LogService } from '../../services/log.service';

@Component({
  selector: 'recipe-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [LogService]
})
export class RecipeHeaderComponent implements OnInit {
  @Output() viewChanged = new EventEmitter<string>();

  constructor(private logService: LogService) { }

  ngOnInit(): void {
  }

  onSelect(viewName: string): void {
    this.logService.logToConsole("view changed to " + viewName);

    this.viewChanged.emit(viewName);
  }

}
