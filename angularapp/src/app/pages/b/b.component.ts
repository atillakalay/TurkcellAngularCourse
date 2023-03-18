import { Component } from '@angular/core';
import { JsonPlaceHolderService } from 'src/app/services/json-place-holder.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent {

  constructor(private jsonPlaceHolderService: JsonPlaceHolderService) {

  }

  ngOnInit(): void {
    this.jsonPlaceHolderService.getPostList(1, 10).subscribe(x => {
      console.log(x)
    })

  }

}
