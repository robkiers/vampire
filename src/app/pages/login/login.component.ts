import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/auth/authentication.service';
import { ButtonComponent } from 'src/app/shared/button/button.component';
import { FormInputComponent } from 'src/app/shared/form-input/form-input.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormInputComponent,
    ButtonComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  router = inject(Router);
  auth = inject(AuthenticationService);
  formGroup: FormGroup<{
    userName: FormControl<string>;
    password: FormControl<string>;
  }>;

  constructor() {
    this.formGroup = new FormGroup({
      userName: new FormControl('', {
        nonNullable: true,
        validators: Validators.required,
      }),
      password: new FormControl('', {
        nonNullable: true,
        validators: Validators.required,
      }),
    });
  }

  onSubmit(): void {
    console.log(this.formGroup);
    if (
      this.formGroup.valid &&
      !!this.formGroup.value.userName &&
      !!this.formGroup.value.password
    ) {
      this.auth.login(
        this.formGroup.value.userName,
        this.formGroup.value.password
      );
    }
  }

  skip() {
    this.router.navigate(['main']);
  }
}
