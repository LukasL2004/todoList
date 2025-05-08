import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { LogInComponent } from './components/log-in/log-in.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { Dummy_users } from './dummy_users';
import { TasksComponent } from './components/Tasks/tasks.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UsersComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = Dummy_users;
  selectedUserID?: string;

  selectUser(id: string) {
    this.selectedUserID = id;
  }

  get selectedUser() {
    return this.users.find((u) => u.id === this.selectedUserID);
  }
}
