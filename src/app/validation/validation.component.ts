import { Component } from "@angular/core";
import { Employee } from "../models/employee.model";

@Component({
  selector: 'validation',
  styleUrls: ['./validation.component.css'],
  templateUrl: './validation.component.html'
})
export class ValidationComponent {
  model = new Employee('', '', false, 'w2', 'default');

}
