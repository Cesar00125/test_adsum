import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FormService {

  url = '/api';
  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get(`${this.url}/categories`);
  }

  addForm(dataForm:any) {
    return this.http.post(`${this.url}/form/store`, dataForm);
  }

  validateEmail(email:any) {
    return this.http.post(`${this.url}/validate/email`, email)
  }
}

export interface Form{
  fullname?:string,
  company?:string,
  email?:string,
  phone?:string,
  message?:string,
  category_id?:number
}

export interface categoria{
  category?:string
}