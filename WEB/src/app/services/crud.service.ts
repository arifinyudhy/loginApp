import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public _http: HttpClient) { }

  getAll(url: string) {
    return this._http.get(url);
  }
  post<T>(url: string, model: T) {
    return this._http.post(url, model);
  }
}
