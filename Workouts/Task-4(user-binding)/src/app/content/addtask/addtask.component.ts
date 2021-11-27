import { Component } from '@angular/core';
import * as moment from 'moment';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent {

  constructor(public taskservice: TaskService) { }

  task: Array<any> = [];
  taskvalue: string;
  d: any;
  addTask() {
    this.task = JSON.parse(localStorage.getItem("tasklist"));
    if (this.taskvalue == null || this.taskvalue == '') {
      alert("Kindly please enter any task to add in a list");
    }
    else {
      this.d = new Date();
      this.d = moment(this.d).format('MM-DD-YYYY [at] HH:mm:ss dddd');
      if (!this.task) {
        this.task = [];

      }
      this.task.push(
        {
          task: this.taskvalue,
          date: this.d
        }
      );

      this.taskvalue = '';
      localStorage.setItem("tasklist", JSON.stringify(this.task));
      this.taskservice.displayTask = this.task;


    }

  }
}
