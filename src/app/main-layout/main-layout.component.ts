import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { UsersComponent } from '../components/users/users.component';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, HeaderComponent, UsersComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
})
export class MainLayoutComponent {}
