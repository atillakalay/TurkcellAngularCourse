import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CountryDropMenu } from 'src/app/models/country-drop-menu';
import { GenderRadioMenu } from 'src/app/models/gender-radio-menu';


@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {

  loginForm: FormGroup
  countryMenu: CountryDropMenu[] = [{ value: 1, text: "Türkiye" }, { value: 2, text: "Almanya" }, { value: 3, text: "Fransa" }, { value: 4, text: "Amerika" }]
  genderMenu: GenderRadioMenu[] = [{ value: 1, text: "Erkek" }, { value: 2, text: "Kadın" }]

  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      userName: fb.control('', Validators.required),
      password: fb.control('', [Validators.required, Validators.minLength(4)]),
      rememberMe: false,
      country: fb.control('', Validators.required),
      gender: [1],
      birthDay: fb.control('')
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

  isValid(formControlName: string): boolean {

    let formControl = this.loginForm.get(formControlName)
    if (!(formControl?.invalid && (formControl.dirty || formControl.touched))) return false

    if (formControl.errors?.['required']) return true
    if (formControl.errors?.['minlength']) return true

    return false
  }

  isSuccessValid(formControlName: string) {
    let formControl = this.loginForm.get(formControlName)
    return formControl?.invalid && (formControl.dirty || formControl.touched)
  }

  isOldEmough = (control: FormControl): { isYoung: true } | null => {
    const birthDate = new Date(control.value)
    birthDate.setFullYear(birthDate.getFullYear() + 18)
    return birthDate < new Date() ? null : { isYoung: true }
  }


}
