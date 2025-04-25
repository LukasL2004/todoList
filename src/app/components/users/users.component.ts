import { Component, input, output } from '@angular/core';
import { type user } from './users.model';
import { Dummy_users } from '../../dummy_users';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [NgClass],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  user = Dummy_users;
  selectedUserId: string | null = null;

  constructor(private router: Router) {}

  imgPath(avatar: string) {
    return 'users/' + avatar;
  }

  selectUser(id: string) {
    this.selectedUserId = id;
    this.router.navigate(['/todoList', id, 'tasks']);
  }
}
