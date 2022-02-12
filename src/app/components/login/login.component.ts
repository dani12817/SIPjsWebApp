import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseError } from 'firebase/app';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingService } from 'src/app/services/loading.service';

import { FormClass } from '../../../shared/form-class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormClass;
  loginError: String;

  constructor(private router: Router, private _authServ: AuthService, private loadingServ: LoadingService) { }

  ngOnInit(): void {
    this.createForm();
  }

  public createForm(): void {
    this.loginForm = new FormClass(new FormGroup({
      email: new FormControl({value: '', disabled: false}, Validators.required),
      password: new FormControl({value: '', disabled: false}, Validators.required)
    }));
  }

  public login(socialNetwork: string): void {
    this.loadingServ.loading = true;
    this.loginError = null;

    if(socialNetwork == null) {
      this._authServ.loginEmailPass(this.loginForm.getValue()).then(res => {
        this.router.navigate(['my-contacts']);
      }).catch((err: FirebaseError) => {
        this.loginError = this._authServ.handleLoginError(err.code);
      }).finally(() => this.loadingServ.loading = false);
    } else {
      this.dologinSocialNetwork(socialNetwork);
    }
  }
  
  public disabledLogin(): boolean {
    return this.loadingServ.loading || this.loginForm.formIsInvalid();
  }

  private dologinSocialNetwork(socialNetwork: string): void {

  }

}
