import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from 'src/app/shared/button/button.component';
import { FormInputComponent } from 'src/app/shared/form-input/form-input.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormInputComponent, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router) {}

  logIn() {
    this.router.navigate(['main']);
  }
}
