import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExampleService } from './example.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularapp';



  constructor(private route: ActivatedRoute, private example: ExampleService) { }

  ngOnInit(): void {

    this.example.myObserveble.subscribe({
      next(data) { console.log(data) },
      error(err) { console.log(err) },
      complete() { console.log("Data yayınlama sona erdi") }

    })
  }


}

