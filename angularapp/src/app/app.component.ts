import { Component } from '@angular/core';
import { PageServiceService } from './pages/page-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';

  constructor(private service: PageServiceService) {
    this.service.write()
  }
}
