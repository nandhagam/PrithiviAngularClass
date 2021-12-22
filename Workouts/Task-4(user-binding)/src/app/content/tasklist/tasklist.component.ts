import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { TaskService } from '../task.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  DisplayTask: Array<any> = [];
  faTrash = faTrash;
  filterCriteria = 0; //due to filterCriteria is 0 it will display only today task in the view

  constructor(public taskservice: TaskService) {
  }


  ngOnInit() {
    this.DisplayTask = this.taskservice.displayTask || [];
    this.taskservice.taskSubscription.subscribe((data: Array<any>) => {
      this.DisplayTask = data;
    })
  }



  checkBoxValue(event, index) {
    this.DisplayTask[index].taskstatus == event;
    localStorage.setItem("tasklist", JSON.stringify(this.DisplayTask));
  }



  deleteTask(taskId) {
    let index = this.DisplayTask.findIndex(taskObj => taskObj.taskId == taskId);
    this.DisplayTask.splice(index, 1);
    localStorage.setItem("tasklist", JSON.stringify(this.DisplayTask));
  }
}
