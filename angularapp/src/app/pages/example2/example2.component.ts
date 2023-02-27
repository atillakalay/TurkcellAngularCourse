import { Component } from '@angular/core';

@Component({
  selector: 'app-example2',
  template: `<h1>İkinci Component</h1><p>{{email}}</p>`,
  styles: [`.h1{color:red}`]
})
export class Example2Component {

  email:string="atilla.kalayy@gmail.com"

}
