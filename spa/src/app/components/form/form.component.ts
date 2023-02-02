import { Component, OnInit } from '@angular/core';
import { Form, FormService } from '../../services/form.service'


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: Form = {
    fullname: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    category_id: 0,
  };

  categories: [];

  success: null;
  error: null;

  constructor(private FormService:FormService) {}

  ngOnInit(): void {
    this.listCategories();
  }

  listCategories() {
    this.FormService.getCategories().subscribe(
      res=>{
        this.categories=<any>res;
      },
      err => console.log(err)
    )
  }

  validateEmail() {
    this.clearAlerts()
    this.FormService.validateEmail({ email: this.form.email }).subscribe(
      res=>{
        const { message } = <any>res
        this.success = message;
        if (message === 'ok') {
          this.sendForm()
        }
      },
      err=> {
        const { message } = <any>err.error
        this.error = message;
      }
    );
  }

  sendForm() {
    this.FormService.addForm(this.form).subscribe(
      res=>{
        const { message } = <any>res
        this.success = message;
        this.form = {
          fullname: '',
          company: '',
          email: '',
          phone: '',
          message: '',
          category_id: 0,
        }
      },
      err=> {
        const { message } = <any>err.error
        this.error = message;
      }
    );
  }

  clearAlerts() {
    this.success = null
    this.error = null
  }

}
