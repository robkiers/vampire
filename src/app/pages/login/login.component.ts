import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormInputComponent } from 'src/app/shared/form-input/form-input.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormInputComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {}
