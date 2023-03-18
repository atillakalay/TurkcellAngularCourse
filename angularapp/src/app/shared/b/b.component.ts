import { Component } from '@angular/core';
import { JsonPlaceHolderService } from 'src/app/services/json-place-holder.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent {

  currency: string | undefined

  constructor(private jsonPlaceHolder: JsonPlaceHolderService) {

  }

  ngOnInit(): void {
    this.jsonPlaceHolder.currencyObservable.subscribe(x => {
      this.currency = x
    })

  }
}
