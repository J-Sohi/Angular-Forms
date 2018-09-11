import {Component} from '@angular/core';
import { Employee } from '../models/employee.model';
import { FormPoster } from '../services/form-poster.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  languages = ['English', 'Spanish', 'Other'];
  model = new Employee('Darla', 'Smith', false, 'w2', '');

  constructor(private formPoster: FormPoster){

  }

  submitForm(form: NgForm){
    //validate form - if primary language is default, don't submit anything
    if(this.model.primaryLanguage == ''){
      return;
    }

    //else do this
    this.formPoster.postEmployeeForm(this.model);
  }

  toUpperCase(value: string){
    if (value.length > 0){
      this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
    }
    else{
      this.model.firstName = value;
    }
  }
}
