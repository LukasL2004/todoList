import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

function mustContainANumber(control: AbstractControl) {
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  for (const digit of digits) {
    if (control.value.includes(digit)) {
      return null;
    }
  }

  return { doesNotContainAnyNumber: true };
}

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css',
})
export class LogInComponent {
  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.email, Validators.required],
    }),
    password: new FormControl('', {
      validators: [
        Validators.minLength(6),
        Validators.required,
        mustContainANumber,
      ],
    }),
  });

  emailErrorMessage() {
    return (
      this.form.controls.email.dirty &&
      this.form.controls.email.invalid &&
      this.form.controls.email.touched
    );
  }

  passwordErrorMessage() {
    return (
      this.form.controls.password.dirty &&
      this.form.controls.password.touched &&
      this.form.controls.password.invalid
    );
  }

  onSubmit() {
    if (this.form.invalid) {
      console.log('Nu este ok');
    } else {
      console.log(this.form);
      console.log('login successful');
      this.form.reset();
    }
  }
}
