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
  taskdate: any = new Date();
  taskDetails: Array<any>;
  taskId: number;


  addTask() {
    this.taskDetails = JSON.parse(localStorage.getItem("tasklist")) || [];
    if (this.taskDetails.length == 0) {
      this.taskId = 1;
    }
    else {
      this.taskId = this.taskDetails[this.taskDetails.length - 1].taskId + 1;
    }
    if (this.taskvalue == null || this.taskvalue == '') {
      alert("Kindly please enter any task to add in a list");
    } else {
      if (this.taskdate) {
        this.taskdate = moment(this.taskdate).format('MM-DD-YYYY');

      } else {
        alert("Kindly please enter date or valid date");
        return;
      }

      this.taskservice.onAddTask({
        task: this.taskvalue,
        date: this.taskdate,
        taskstatus: false,
        taskId: this.taskId
      })
      console.log(this.taskId)
      this.taskvalue = '';
      this.taskdate = new Date();

    }

  }
}
