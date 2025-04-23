import { Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { UsersComponent } from './components/users/users.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LogInComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'userList',
    component: UsersComponent,
  },
];
