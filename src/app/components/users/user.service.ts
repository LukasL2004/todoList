import { Injectable } from '@angular/core';
import { Dummy_users } from '../../dummy_users';
@Injectable({
  providedIn: 'root',
})
export class userService {
  user = Dummy_users;
}
