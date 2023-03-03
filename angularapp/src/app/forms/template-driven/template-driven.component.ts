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
  countryMenu: countryDropMenu[] = [{value:0,text:"Seçiniz"},{ value: 1, text: "Türkiye" }, { value: 2, text: "Almanya" }, { value: 3, text: "Fransa" }, { value: 4, text: "Amerika" }]

  constructor() {
    this.loginModel = { userName: "", password: "", rememberMe: false, country: 0,gender:1 }
    this.loginModel2 = new loginModelC()
  }

  save(form: NgForm) {
    console.log(this.loginModel)
  }
}

interface countryDropMenu {
  text: string
  value: number
}

interface loginModel {
  userName: string
  password: string
  rememberMe: boolean
  country: number
  gender:number
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
