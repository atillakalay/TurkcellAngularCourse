import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() {

  }

  upper(text: string) {
    return text.toUpperCase()
  }
}
