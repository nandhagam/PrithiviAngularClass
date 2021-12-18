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
  resultArray: Array<any> = [];

  constructor(public taskservice: TaskService) {
  }


  ngOnInit() {
    this.DisplayTask = this.taskservice.displayTask || [];
    this.displayDefault();
    this.taskservice.taskSubscription.subscribe((data: Array<any>) => {
      this.DisplayTask = data;
      this.displayDefault();
<<<<<<< HEAD

    })


  }

  displayDefault() {
=======
    })
  }

  displayDefault() {
    this.resultArray = [];
>>>>>>> 195ec61497168d3beb4d6fa23a4fa8ff0e939512
    this.DisplayTask.forEach((task, i) => {
      let result: boolean;
      result = moment(this.DisplayTask[i].date).isSame(this.todayDate);
      if (result == true) {
        this.resultArray.push(this.DisplayTask[i]);
      }
<<<<<<< HEAD

    })
  }

=======
    })
  }


>>>>>>> 195ec61497168d3beb4d6fa23a4fa8ff0e939512
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


<<<<<<< HEAD
  deleteTask(resultArray, taskId) {
    let index = this.DisplayTask.findIndex(resultArray => resultArray.taskId == taskId);
    this.DisplayTask.splice(index, 1);
=======
  deleteTask(index) {
   /* this.DisplayTask.splice(index, 1);*/
    // task.id => findIndex => splice

    // _.remove
>>>>>>> 195ec61497168d3beb4d6fa23a4fa8ff0e939512
    localStorage.setItem("tasklist", JSON.stringify(this.DisplayTask));
  }
}
