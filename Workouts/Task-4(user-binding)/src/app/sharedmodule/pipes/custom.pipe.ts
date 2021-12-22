import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'custom',
  pure: false
})
export class CustomPipe implements PipeTransform {



  transform(value: Array<any>, arg: number): Array<any> {

    const filterTask = () => {
      let resultArray = [];
      const todayDate = moment().format("YYYY MM DD");
      switch (arg) {
        case -1: {
          value.forEach((task, i) => {
            if (moment(value[i].date).isBefore(todayDate) == true) {
              resultArray.push(value[i]);
            }
          })
          break;
        }
        case 0: {
          value.forEach((task, i) => {
            if (moment(value[i].date).isSame(todayDate) == true) {
              resultArray.push(value[i]);
            }
          })
          break;
        }
        case 1: {
          value.forEach((task, i) => {
            if (moment(value[i].date).isAfter(todayDate) == true) {
              resultArray.push(value[i]);
            }
          })
          break;
        }
        default: {
          resultArray = value;
        }
      }
      return resultArray;
    }
    return filterTask();
  }


}


