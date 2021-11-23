import { Component } from '@angular/core';


@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {
  taskarr: Array<any> = [];
  getTask() {
    this.taskarr = JSON.parse(localStorage.getItem("task"));
  }


}
