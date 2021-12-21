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
  today = moment();
  todayDate = this.today.format("YYYY MM DD");
  resultArray: Array<any> = [];
  /*  filterCriteria = 0; */

  constructor(public taskservice: TaskService) {
  }


  ngOnInit() {
    this.DisplayTask = this.taskservice.displayTask || [];
    this.displayDefault();
    /* this.filterTask(this.filterCriteria); */
    this.taskservice.taskSubscription.subscribe((data: Array<any>) => {
      this.DisplayTask = data;
      this.displayDefault();
      /*  this.filterTask(this.filterCriteria); */

    })


  }

  displayDefault() {
    this.resultArray = [];
    this.DisplayTask.forEach((task, i) => {
      let result: boolean;
      result = moment(this.DisplayTask[i].date).isSame(this.todayDate);
      if (result == true) {
        this.resultArray.push(this.DisplayTask[i]);
      }

    })
  }

  checkBoxValue(event, index) {
    this.DisplayTask[index].taskstatus == event;
    localStorage.setItem("tasklist", JSON.stringify(this.DisplayTask));
  }

  /* filterTask(criteria: any) {
    this.filterCriteria = criteria;
    let result: boolean;
    this.resultArray = [];
    switch (criteria) {
      case -1: {
        this.DisplayTask.forEach((task, i) => {
          result = moment(this.DisplayTask[i].date).isBefore(this.todayDate);
          if (result == true) {
            this.resultArray.push(this.DisplayTask[i]);


          }
        })
        break;
      }
      case 0: {
        this.DisplayTask.forEach((task, i) => {
          result = moment(this.DisplayTask[i].date).isSame(this.todayDate);
          if (result == true) {
            this.resultArray.push(this.DisplayTask[i]);
          }
        })
        break;
      }
      case 1: {
        this.DisplayTask.forEach((task, i) => {
          result = moment(this.DisplayTask[i].date).isAfter(this.todayDate);
          if (result == true) {
            this.resultArray.push(this.DisplayTask[i]);
          }
        })
        break;
      }
      case 2: {
        this.resultArray = this.DisplayTask;
      }
    }
  }


  deleteTask(taskId) {
    let index = this.DisplayTask.findIndex(taskObj => taskObj.taskId == taskId);
    this.DisplayTask.splice(index, 1);
    localStorage.setItem("tasklist", JSON.stringify(this.DisplayTask));
    /*  this.displayDefault(); */
  /*  this.filterTask(this.filterCriteria);
 } */
}
