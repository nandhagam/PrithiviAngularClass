import { Component, DoCheck } from '@angular/core';
import * as moment from 'moment';
import { TaskService } from '../task.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements DoCheck {

  DisplayTask: Array<any> = [];
  ydate: any;
  date: any;
  faTrash = faTrash;
  completed: any;

  constructor(public taskservice: TaskService) {
  }

  ngOnInit() {
    this.DisplayTask = this.taskservice.displayTask;
    this.taskservice.taskSubscription.subscribe((data: Array<any>) => {
      this.DisplayTask = data;
    })
  }

  ngDoCheck() {
    // this.DisplayTask = this.taskservice.displayTask;

    // if (this.completed == true) {
    //   this.completed = "Task completed";
    //   console.log(this.completed);
    // }
    // else {
    //   this.completed = "Task open";
    //   console.log(this.completed);
    // }
  }

  showYesterdayTask() {
    const yesterday = moment().add(-1, 'days');
    this.ydate = yesterday.format('MM-DD-YYYY');
    console.log(this.ydate);
    this.date = Date.parse(this.taskservice.displayTask[3].date);
    console.log(this.date);
    console.log(new Date(this.taskservice.displayTask[3].date));
    this.date = moment(this.date).format('MM-DD-YYYY');
    console.log(this.date);
    if (this.date == this.ydate) {
      alert("Equal");
    }
    else {
      alert("NotEqual");
    }
  }
}
