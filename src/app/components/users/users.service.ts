import { Injectable } from '@angular/core';
import { Dummy_users } from '../../dummy_users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  get users() {
    return Dummy_users;
  }
}
