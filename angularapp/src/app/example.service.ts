import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  myObserveble:Observable<string>
  constructor() {

     this.myObserveble = new Observable<string>(data => {
      data.next("Atilla")
      data.next("Atilla")
      data.complete()
    })
   }
}
