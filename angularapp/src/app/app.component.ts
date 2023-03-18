import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Post } from './models/post';
import { JsonPlaceHolderService } from './services/json-place-holder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLoadingShow: boolean = true
  postList: string[] = []
  title = 'angularapp';
  currencyList: string[] = ["Türk Lirası", "Dolar"]
  selectCurrency = new FormControl("Türk Lirası")


  constructor(private josnPostPlaceHolderServise: JsonPlaceHolderService) { }

  ngOnInit(): void {
    this.selectCurrency.valueChanges.subscribe(x => {
      this.josnPostPlaceHolderServise.setCurrency(x)
    })
  }

}






