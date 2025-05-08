import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

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
  imports: [ReactiveFormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css',
})
export class LogInComponent {
  errorMessage = '';

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

  managerLogIn() {
    return (
      this.form.controls.email.value === 'manager@todo.com' &&
      this.form.controls.password.value === 'manager1'
    );
  }
  AdaLogIn() {
    return (
      this.form.controls.email.value === 'ada@todo.com' &&
      this.form.controls.password.value === 'ada1'
    );
  }
  AlexLogIn() {
    return (
      this.form.controls.email.value === 'alex@todo.com' &&
      this.form.controls.password.value === 'alex1'
    );
  }
  DavidLogIn() {
    return (
      this.form.controls.email.value === 'david@todo.com' &&
      this.form.controls.password.value === 'david1'
    );
  }
  MartinLogIn() {
    return (
      this.form.controls.email.value === 'martin@todo.com' &&
      this.form.controls.password.value === 'martin1'
    );
  }
  EmilyLogIn() {
    return (
      this.form.controls.email.value === 'emily@todo.com' &&
      this.form.controls.password.value === 'emily1'
    );
  }

  constructor(private router: Router, private authService: AuthService) {}

  onSubmit() {
    if (this.managerLogIn()) {
      this.router.navigate(['/todoList']);
      this.authService.setRole('manager');
    } else if (this.AdaLogIn()) {
      this.router.navigate(['/todoList']);
      this.authService.setRole('employee');
      this.authService.setId('u1');
    } else if (this.AlexLogIn()) {
      this.router.navigate(['/todoList']);
      this.authService.setRole('employee');
      this.authService.setId('u2');
    } else if (this.DavidLogIn()) {
      this.router.navigate(['/todoList']);
      this.authService.setRole('employee');
      this.authService.setId('u3');
    } else if (this.MartinLogIn()) {
      this.router.navigate(['/todoList']);
      this.authService.setRole('employee');
      this.authService.setId('u4');
    } else if (this.EmilyLogIn()) {
      this.router.navigate(['/todoList']);
      this.authService.setRole('employee');
      this.authService.setId('u5');
    } else if (!this.managerLogIn() || (!this.AdaLogIn() && this.form.valid)) {
      this.errorMessage = 'Invalid credentials';
    }

    console.log(this.form);
  }
}
