import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Post } from '../models/post';
import { JsonPlaceHolderService } from '../services/json-place-holder.service';

@Component({
  selector: 'app-ornek',
  templateUrl: './ornek.component.html',
  styleUrls: ['./ornek.component.css']
})
export class OrnekComponent {

  post: Post | undefined

  constructor(private jsonPlaceHolderService: JsonPlaceHolderService) {

  }
  ngOnInit(): void {

    this.jsonPlaceHolderService.getPost(2).subscribe({
      next: (x) =>console.log(x.body) ,
      error: (err: Error) => console.warn(`Hata: ${err}`),
      complete: () => console.log("İstek tamamlandı.")

    })

  }

}