import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLApi, URLodata } from '../../config/server';
import { Car } from '../../models/userModel';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this.getCars();
  }
  getCars() {
    this._http.get(URLodata.car).subscribe(
      (res: any) => {
        this.cars = res.value;
        console.log(this.cars);
      },
      error => {
        console.log(error);
      }
    );
  }
}
