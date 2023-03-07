import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      userName: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required, Validators.minLength(4)]),
      rememberMe: new FormControl(),
      country: new FormControl(0),
      gender: new FormControl([1])
    })
  }

  signIn() {
    console.log(this.loginForm.value)
  }

  isInvalidMessageShow(formControlName: string) {
    return this.loginForm.get(formControlName)?.invalid &&
      (this.loginForm.get(formControlName)?.dirty ||
        this.loginForm.get(formControlName)?.touched)
  }

}
