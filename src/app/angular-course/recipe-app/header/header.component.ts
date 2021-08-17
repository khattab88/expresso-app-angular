import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

import { LogService } from '../../services/log.service';

@Component({
  selector: 'recipe-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [LogService]
})
export class RecipeHeaderComponent implements OnInit {
  @Output() viewChanged = new EventEmitter<string>();
  loggedIn: Boolean = false;

  constructor(private logService: LogService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isAuthneticated()
      .then((authenticated) => {
        this.loggedIn = authenticated as Boolean;
      });
  }

  onSelect(viewName: string): void {
    // this.logService.logToConsole("view changed to " + viewName);

    this.viewChanged.emit(viewName);
  }

  onLogin() {
    this.authService.login();

    this.authService.authenticatedEvent
      .subscribe((authenticated) => {
        this.loggedIn = authenticated;
      });
  }

  onLogout() {
    this.authService.logout();

    this.authService.authenticatedEvent
      .subscribe((authenticated) => {
        this.loggedIn = authenticated;
      });
  }

}
