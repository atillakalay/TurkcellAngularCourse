import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {

  loginModel: loginModel
  loginModel2: loginModelC

  constructor() {
    this.loginModel = { userName: "", password: "", rememberMe: false }
    this.loginModel2 = new loginModelC()
  }

  save(form: NgForm) {
    console.log(this.loginModel)
  }


}
interface loginModel {
  userName: string
  password: string
  rememberMe: boolean
}
class loginModelC {
  userName?: string
  password?: string
  rememberMe?: boolean
  // constructor(userName: string, password: string, rememberMe: boolean) {
  //   this.userName = userName
  //   this.password = password
  //   this.rememberMe = rememberMe
  // }
}
