import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CountryDropMenu } from 'src/app/models/country-drop-menu';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {

  loginForm: FormGroup
  countryMenu: CountryDropMenu[] = [{ value: 0, text: "Seçiniz" }, { value: 1, text: "Türkiye" }, { value: 2, text: "Almanya" }, { value: 3, text: "Fransa" }, { value: 4, text: "Amerika" }]

  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      userName: '',
      password: '',
      rememberMe: false,
      country:0
    })
  }

  signIn() {
    console.log(this.loginForm.value)
  }
}
