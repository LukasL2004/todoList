import { Component, input, output } from '@angular/core';
import { type user } from './users.model';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  users = input.required<user>();
  select = input<boolean>();
  selected = output<string>();

  imgPath(avatar: string) {
    return 'users/' + avatar;
  }

  selectedUser() {
    this.selected.emit(this.users().id);
  }
}
