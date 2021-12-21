import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  filterCriteria = 0;
  DisplayTask: Array<any> = [];
  resultArray: Array<any> = [];
  today = moment();
  todayDate = this.today.format("YYYY MM DD");

  transform(value: unknown, ...args: unknown[]): unknown {

    filterTask(criteria: any) {
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
      this.filterTask(this.filterCriteria);
    }

  }
   
    return null;
  }


