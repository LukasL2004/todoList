import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userRole: 'manager' | 'employee' | null = null;

  setRole(role: 'manager' | 'employee') {
    this.userRole = role;
  }

  getRole() {
    return this.userRole;
  }

  manager(): boolean {
    return this.userRole === 'manager';
  }
}
