import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

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

  auth = inject(Auth);

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

  email = this.form.value.email;
  password = this.form.value.password;

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

  loggedInSuccessfully() {
    this.router.navigate(['/todoList']);
  }

  constructor(private router: Router, private authService: AuthService) {}

  onSubmit() {
    signInWithEmailAndPassword(
      this.auth,
      this.form.value.email!,
      this.form.value.password!
    )
      .then((response) => {
        const user = response.user;
        const isManager = user.email === 'manager@todo.com';
        const employee = user.uid;

        this.authService.setRole(isManager ? 'manager' : 'employee');
        this.authService.setId(employee);

        this.loggedInSuccessfully();
      })
      .catch((error) => console.error(error));
  }

  // console.log(this.form);
}
