import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/userModel';
import { CrudService } from '../../services/crud.service';
import { HttpClient } from '@angular/common/http';
import { URLodata } from '../../config/server';
import { Router } from '@angular/router';
@Component({
  selector: 'app-formuser',
  templateUrl: './formuser.component.html',
  styleUrls: ['./formuser.component.css']
})
export class FormuserComponent implements OnInit {
  formUser: FormGroup;
  submitted: boolean = false;
  user: User = new User();

  constructor(private _formBuilder: FormBuilder, private _crud: CrudService, public _http: HttpClient, private _router: Router) {
    this._crud = new CrudService(_http);
  }

  ngOnInit() {
    this.formUser = this._formBuilder.group({
      Username: ['', Validators.required],
      Password: ['', Validators.required],
      Password2: [''],
    });
  }

  get f() { return this.formUser.controls; }
  isPassValid(): boolean {
    return this.formUser.value.Password === this.formUser.value.Password2
  }
  register() {
    this.submitted = true;
    if (this.formUser.invalid || !this.isPassValid()) {
      if (!this.isPassValid()) {
        alert('please check your password !!');
      }else
      alert('username and password required !!')
      return;
    }
    delete this.formUser.value.Password2;
    this.user = this.formUser.value;
    console.log(this.user);
    this._crud.post(URLodata.user, this.user).subscribe(
      (res: any) => {
        alert('username ' + res.Username + ' success registered');
        this._router.navigate(['/login']);
      },
      error => {
        alert(error.error['odata.error'].message.value);
      }
    );
  }
}
