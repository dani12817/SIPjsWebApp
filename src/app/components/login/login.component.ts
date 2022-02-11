import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FormClass } from '../../../shared/form-class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormClass;

  constructor() { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.loginForm = new FormClass(new FormGroup({
      email: new FormControl({value: '', disabled: false}, Validators.required),
      password: new FormControl({value: '', disabled: false}, Validators.required)
    }));
  }

  login(socialNetwork: string): void {
    if(socialNetwork == null) {

    } else {
      this.dologinSocialNetwork(socialNetwork);
    }
  }

  private dologinSocialNetwork(socialNetwork: string): void {

  }

}
