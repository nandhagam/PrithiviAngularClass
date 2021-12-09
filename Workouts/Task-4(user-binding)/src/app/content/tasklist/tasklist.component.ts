import { Component, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';
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
  todayDate = this.today.format("MM-DD-YYYY");
  resultArray: Array<any>;

  constructor(public taskservice: TaskService, private bgColor: ElementRef) {
  }
  @HostBinding('style.color') color: string = '';
  @HostListener('click') bgcolor() {
    this.bgColor.nativeElement.style.background = "pink";
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
          this.color = "#e3170a";
        })
        break;
      }
      case 0: {
        this.color = "#ff6b35";
        this.DisplayTask.forEach((task, i) => {
          result = moment(this.DisplayTask[i].date).isSame(this.todayDate);
          if (result == true) {
            this.resultArray.push(this.DisplayTask[i]);
          }
        })
        break;
      }
      case 1: {
        this.color = "#26532b";
        this.DisplayTask.forEach((task, i) => {
          result = moment(this.DisplayTask[i].date).isAfter(this.todayDate);
          if (result == true) {
            this.resultArray.push(this.DisplayTask[i]);
          }
        })
        break;
      }
    }
  }


  deleteTask(index) {
    this.DisplayTask.splice(index, 1);
    localStorage.setItem("tasklist", JSON.stringify(this.DisplayTask));

  }
}
