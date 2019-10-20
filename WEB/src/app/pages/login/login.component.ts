import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { URLApi } from '../../config/server';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private _http: HttpClient,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.formLogin = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() { return this.formLogin.controls; }

  login() {
    if (this.formLogin.invalid) {
      alert('username and password must be fill.');
      return;
    }
    this._http.post(URLApi.apiLogin, this.formLogin.value).subscribe(
      (res:any) => {
        localStorage.setItem('currentUser', res.Username);
        this._router.navigate(['/home']);
      },
      error => {
        alert(error.error.Message);
      }
    )
  }

}
