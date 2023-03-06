import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {

  loginForm: FormGroup

  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      userName: '',
      password: ''
    })
  }

  signIn() {
    console.log(this.loginForm.value)
  }
}
