import { Component, DoCheck } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements DoCheck {
  taskarr: Array<any> = [];


  ngDoCheck() {
    this.taskarr = JSON.parse(localStorage.getItem("task"));
    console.log(this.taskarr[0].date);
    console.log("moment" + moment(this.taskarr[0].date).format('MM DD YYYY'));
  }




}
