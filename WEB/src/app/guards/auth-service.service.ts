import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  isAuthenticated(): boolean {
    let currentUser = localStorage.getItem('currentUser');
    if (currentUser === '' || currentUser === null)
      return false;
    else
      return true;
  }
}
