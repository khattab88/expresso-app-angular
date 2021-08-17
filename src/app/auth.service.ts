import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;
  authenticatedEvent = new EventEmitter<Boolean>();

  constructor() { }

  login() {
    this.loggedIn = true;
    this.authenticatedEvent.emit(this.loggedIn);
  }

  logout() {
    this.loggedIn = false;
    this.authenticatedEvent.emit(this.loggedIn);
  }

  isAuthneticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800)
    });

    return promise;
  }
}
