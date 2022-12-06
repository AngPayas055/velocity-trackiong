import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'velocity-tracking';

  employees:any =[
    {employee: "",estimated_hours: "",actual_hours: ""},
  ]

  // employeeArr:any =[]

  // employeeObj:any = {
  //   employee: "",
  //   estimated_hours: "",
  //   actual_hours: ""}

  content:any = {
    project: "",
    task_title: "",
    task_description: "",
    total_estimate: "",
    employees: this.employees
  }
  add(){
    this.employees.push({employee: ""})
  }
  del(i:number){
    this.employees.splice(i, 1)
  }
  save(){
    console.log(this.content)
    // this.employeeArr.push(this.employeeObj)
    // console.log(this.employees)
  }
  close(){
    location.reload();
  }
}

