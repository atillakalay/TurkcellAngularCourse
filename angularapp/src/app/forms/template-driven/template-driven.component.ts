import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {

  loginModel: loginModel

  constructor() {
    this.loginModel = { userName: "", password: "" }
  }

  save(form:NgForm) {
    console.log(this.loginModel)
  }


}
interface loginModel {
  userName: string
  password: string
}
