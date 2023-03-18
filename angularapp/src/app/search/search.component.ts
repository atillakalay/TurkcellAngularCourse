import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  search = new FormControl('')

  constructor() {

  }

  ngOnInit(): void {
    this.search.valueChanges.subscribe(x => {
      console.log(x)
    })

  }
}
