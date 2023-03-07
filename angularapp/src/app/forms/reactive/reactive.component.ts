import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryDropMenu } from 'src/app/models/country-drop-menu';
import { GenderRadioMenu } from 'src/app/models/gender-radio-menu';


@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {

  loginForm: FormGroup
  countryMenu: CountryDropMenu[] = [{ value: 0, text: "Seçiniz" }, { value: 1, text: "Türkiye" }, { value: 2, text: "Almanya" }, { value: 3, text: "Fransa" }, { value: 4, text: "Amerika" }]
  genderMenu: GenderRadioMenu[] = [{ value: 1, text: "Erkek" }, { value: 2, text: "Kadın" }]

  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      userName: fb.control('', Validators.required),
      password: fb.control('', [Validators.required, Validators.minLength(4)]),
      rememberMe: false,
      country: 0,
      gender: [1]
    })
  }

  signIn() {
    console.log(this.loginForm.value)
  }
}
