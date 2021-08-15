import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  logToConsole(message: string) {
    console.log(`log to the console: ${message} at ${new Date().toString()}`);
  }
}
