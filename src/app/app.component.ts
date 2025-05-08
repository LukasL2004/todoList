import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Dummy_users } from './dummy_users';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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
