import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { JsonPlaceHolderService } from '../services/json-place-holder.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  search = new FormControl('')
  searchResultList: string[] = []

  constructor(private jsonPlaceHolderService: JsonPlaceHolderService) {

  }

  ngOnInit(): void {
    this.search.valueChanges.subscribe(x => {
      this.jsonPlaceHolderService.getUserWithSearch(x as string).subscribe(y => {
        this.searchResultList = y
      })
    })

  }
}
