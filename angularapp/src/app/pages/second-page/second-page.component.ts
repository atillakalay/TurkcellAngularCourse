import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent {
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
    console.log(id)
  }

}
