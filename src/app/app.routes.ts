import { Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { UsersComponent } from './components/users/users.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [{ path: 'login', component: LogInComponent }],
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'todoList', component: UsersComponent },
      { path: 'todoList/:userId/tasks', component: TasksComponent },
    ],
  },
];
