import { Component } from '@angular/core';
import * as moment from 'moment';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent {


  constructor(public taskservice: TaskService) {

  }

  taskvalue: string;
  taskdate: any;
  taskDetails: Array<any>;
  taskId: number;


  addTask(form) {
    console.log(form);
    this.taskDetails = JSON.parse(localStorage.getItem("tasklist")) || [];
    if (this.taskDetails.length == 0) {
      this.taskId = 1;
    }
    else {
      this.taskId = this.taskDetails[this.taskDetails.length - 1].taskId + 1;
    }
    if (this.taskvalue == undefined || this.taskvalue == ''
      || this.taskdate == undefined || this.taskdate == '') {
      alert("Kindly please enter any task  & date to add in a list");
    }
    else {

      this.taskservice.onAddTask({
        task: this.taskvalue,
        date: this.taskdate,
        taskstatus: false,
        taskId: this.taskId
      })
      this.taskvalue = '';
      this.taskdate = '';

    }

  }
}
