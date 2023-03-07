import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CountryDropMenu } from 'src/app/models/country-drop-menu';
import { GenderRadioMenu } from 'src/app/models/gender-radio-menu';

@Component({
  selector: 'app-reactive-type2',
  templateUrl: './reactive-type2.component.html',
  styleUrls: ['./reactive-type2.component.css']
})
export class ReactiveType2Component {
  loginForm: FormGroup
  countryMenu: CountryDropMenu[] = [{ value: 0, text: "Seçiniz" }, { value: 1, text: "Türkiye" }, { value: 2, text: "Almanya" }, { value: 3, text: "Fransa" }, { value: 4, text: "Amerika" }]
  genderMenu: GenderRadioMenu[] = [{ value: 1, text: "Erkek" }, { value: 2, text: "Kadın" }]

  constructor() {
    this.loginForm = new FormGroup({
      userName: new FormControl(),
      password: new FormControl(),
      rememberMe: new FormControl(),
      country: new FormControl(0)
      gender: new FormControl(0)
    })
  }

  signIn() {
    console.log(this.loginForm.value)
  }

}
