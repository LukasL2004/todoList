import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userRole: 'manager' | 'employee' | null = null;
  private userID: 'u1' | 'u2' | 'u3' | 'u4' | 'u5' | null = null;

  setId(Id: 'u1' | 'u2' | 'u3' | 'u4' | 'u5') {
    this.userID = Id;
  }
  setRole(role: 'manager' | 'employee') {
    this.userRole = role;
  }

  getId() {
    return this.userID;
  }

  manager(): boolean {
    return this.userRole === 'manager';
  }
  Ada() {
    return this.userID === 'u1';
  }
  Alex() {
    return this.userID === 'u2';
  }

  David() {
    return this.userID === 'u3';
  }
  Martin() {
    return this.userID === 'u4';
  }
  Emily() {
    return this.userID === 'u5';
  }
}
