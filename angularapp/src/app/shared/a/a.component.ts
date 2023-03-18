import { Component } from '@angular/core';
import { JsonPlaceHolderService } from 'src/app/services/json-place-holder.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent {

  currency: string | undefined

  constructor(private jsonPlaceHolder: JsonPlaceHolderService) {

  }

  ngOnInit(): void {
    this.jsonPlaceHolder.currencyObservable.subscribe(x => {
      this.currency = x
    })

  }


}
