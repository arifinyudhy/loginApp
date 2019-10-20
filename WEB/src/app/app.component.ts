import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from './guards/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myapp';
  isLogin: boolean = false;

  constructor(
    private _router: Router,
    private _authService: AuthServiceService
  ) { }

  ngOnInit(): void {
    this.isLogin = this._authService.isAuthenticated();
  }
  get login() {
    return this._authService.isAuthenticated();
  }
  LogOut() {
    localStorage.removeItem('currentUser');
    this._router.navigate(['/login']);
  }
}
