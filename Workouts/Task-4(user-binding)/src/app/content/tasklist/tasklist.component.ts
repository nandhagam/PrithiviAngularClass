import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import * as moment from 'moment';
import { TaskService } from '../task.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  @ViewChildren('task') tasks: QueryList<ElementRef>;

  DisplayTask: Array<any> = [];
  faTrash = faTrash;
  today = moment();
  todayDate = this.today.format("MM-DD-YYYY");
  resultArray: Array<any>;

  constructor(public taskservice: TaskService, private bgColor: ElementRef) {
  }

  ngOnInit() {
    this.DisplayTask = this.taskservice.displayTask;
    this.resultArray = this.DisplayTask;
    this.taskservice.taskSubscription.subscribe((data: Array<any>) => {
      this.DisplayTask = data;
      this.resultArray = data;
    })
  }

  ngAfterViewChecked(){
    const colors = ['green', 'yellow', 'red']

    this.tasks.forEach((task, index) =>{
      console.log(task)
      task.nativeElement.style.backgroundColor=colors[index];
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
    }



  }


  deleteTask(index) {
    this.DisplayTask.splice(index, 1);
    localStorage.setItem("tasklist", JSON.stringify(this.DisplayTask));

  }
}
