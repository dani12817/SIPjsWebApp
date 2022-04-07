import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { FormClass } from '../../../shared/form-class';
import { LoadingService } from '../../services/loading.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { PasswordValidator } from '../../../shared/password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormClass;

  constructor(private router: Router, private authServ: AuthService, private loadingServ: LoadingService) { }

  ngOnInit(): void {
    this.createForm();
  }

  public createForm(): void {
    this.registerForm = new FormClass(new FormGroup({
      name: new FormControl({value: '', disabled: false}, Validators.required),
      username: new FormControl({value: '', disabled: false}, [Validators.required, Validators.minLength(6)]),
      email: new FormControl({value: '', disabled: false}, Validators.required),
      password: new FormControl({value: '', disabled: false}, Validators.required),
      repeatPassword: new FormControl({value: '', disabled: false}, Validators.required),
    },
    {
      validators: PasswordValidator("password", "repeatPassword")
    }));

    this.registerForm.addValidationMessage("minlength", "El mínimo son 6 caracteres.");
    this.registerForm.addValidationMessage("noMatchPassword", "Las contraseñas no coinciden.");
    this.registerForm.addValidationMessage("usernameExist", "El username ya está en uso.");
    this.registerForm.addValidationMessage("emailExist", "El email ya está en uso.");
  }

  async register() {
    this.loadingServ.loading = true;
    if (await this.authServ.checkUsernameExist(this.registerForm.getAllValue())) {
      this.registerForm.get("username").setErrors({usernameExist: true});
    }
    
    if (await this.authServ.checkEmailExist(this.registerForm.getAllValue())) {
      this.registerForm.get("email").setErrors({emailExist: true});
    }

    if (!this.registerForm.formIsInvalid()) {
      this.router.navigate(['login']);
    } else {
      this.loadingServ.loading = false;
    }
  }

  disableRegister(): boolean {
    return this.loadingServ.loading || this.registerForm.formIsInvalid();
  }
}
