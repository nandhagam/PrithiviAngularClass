import { Component, DoCheck } from '@angular/core';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements DoCheck {
  constructor(public taskservice: TaskService) { }
  DisplayTask: Array<any> = [];


  ngDoCheck() {
    this.DisplayTask = this.taskservice.displayTask;
  }
}
