import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TempForm2';

  RegisterStudent(studentForm: NgForm): void {   
    console.log(studentForm.value);




    debugger;
var firstName=studentForm.value.firstName;
var lastName=studentForm.value.lastName;
var FirstName=studentForm.value.email;
 
  }
}
