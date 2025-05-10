import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userRole: 'manager' | 'employee' | null = null;
  private userID: string = '';

  setRole(role: 'manager' | 'employee') {
    this.userRole = role;
  }

  setId(Id: string) {
    this.userID = Id;
  }

  getID() {
    return this.userID;
  }

  manager(): boolean {
    return this.userRole === 'manager';
  }
}
