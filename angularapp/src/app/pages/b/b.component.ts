import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonPlaceHolderService } from 'src/app/services/json-place-holder.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent {

  constructor(private route:ActivatedRoute) {

  }

  ngOnInit(): void {
    console.log(this.route.snapshot.data['postList'])
  }

}
