import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { delay, Observable, of } from 'rxjs';
import { JsonPlaceHolderService } from './services/json-place-holder.service';

@Injectable({
  providedIn: 'root'
})
export class ExampleResolver implements Resolve<string[]> {

  constructor(private jsonPlaceHolderService: JsonPlaceHolderService) {
  }




  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string[]> {
    return this.jsonPlaceHolderService.getPostList(1, 10).pipe(delay(5000))
  }
}
