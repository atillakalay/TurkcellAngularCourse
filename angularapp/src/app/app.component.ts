import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from './models/post';
import { JsonPlaceHolderService } from './services/json-place-holder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLoadingShow: boolean = true
  postList: Post[] = []
  title = 'angularapp';

  constructor(private josnPostPlaceHolderServise: JsonPlaceHolderService) { }

  ngOnInit(): void {

    this.josnPostPlaceHolderServise.getPostList().subscribe(x => {
      this.postList = x
      this.isLoadingShow = false

    })

  }

}






