import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {TaskService} from '../task.service';
import {faTrash} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  DisplayTask: Array<any> = [];
  faTrash = faTrash;
  today = moment();
  todayDate = this.today.format("MM-DD-YYYY");
  day: string;
  resultArray: Array<any>;

  constructor(public taskservice: TaskService) {
  }

  ngOnInit() {
    this.DisplayTask = this.taskservice.displayTask;
    this.resultArray = this.DisplayTask;
    this.taskservice.taskSubscription.subscribe((data: Array<any>) => {
      this.DisplayTask = data;
      this.resultArray = data;
    })
  }

  checkBoxValue(event, index) {
    this.DisplayTask[index].taskstatus == event;
    localStorage.setItem("tasklist", JSON.stringify(this.DisplayTask));
  }

  filterTask(criteria: any) {
    let result: boolean;
    this.resultArray = [];
    switch (criteria) {
      case -1: {
        this.DisplayTask.forEach((task, i) => {
          result = moment((this.DisplayTask[i].date)).isBefore(this.todayDate);
          if (result == true) {
            this.resultArray.push(this.DisplayTask[i]);
          }
        })
        break;
      }
      case 0: {
        for (let i = 0; i < this.DisplayTask.length; i++) {
          result = moment(this.DisplayTask[i].date).isSame(this.todayDate);
          if (result == true) {
            this.resultArray.push(this.DisplayTask[i]);
          }
        }
        break;
      }
      case 1: {
        for (let i = 0; i < this.DisplayTask.length; i++) {
          result = moment(this.DisplayTask[i].date).isAfter(this.todayDate);
          if (result == true) {
            this.resultArray.push(this.DisplayTask[i]);
          }
        }
        break;
      }
    }
  }


  deleteTask(index) {
    this.DisplayTask.splice(index, 1);
    localStorage.setItem("tasklist", JSON.stringify(this.DisplayTask));

  }
}
