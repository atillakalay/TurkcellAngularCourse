import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExampleService } from '../example.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  constructor(private route: ActivatedRoute, private example: ExampleService) { }

  ngOnInit(): void {

    this.example.myObserveble.subscribe({
      next(data) { console.log("First Compenent: "+data) },
      error(err) { console.log("First Compenent: "+err) },
      complete() { console.log(" First Compenent Data yayınlama sona erdi") }

    })
  }
}
