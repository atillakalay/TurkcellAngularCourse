import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Helper2Service {

  constructor() { }

  upper(text: string) {
    return text.toUpperCase() + " daha hızlı"
  }
}
