import {Directive, HostBinding, Input} from '@angular/core';
import * as moment from "moment";

@Directive({
  selector: '[appDueCategorize]'
})
export class DueCategorizeDirective {

  @Input('appDueCategorize') task: any = {};

  @HostBinding('style.backgroundColor') color = "#ff6b35";

  constructor() {
  }

  ngOnInit() {
    this.categorizeTask();
  }

  categorizeTask = () => {
    const todayDate = moment().format('MM-DD-YYYY');
    console.log(this.task.date);
    console.log(todayDate)
    console.log(moment(new Date(this.task.date)).isSame(todayDate))
    this.color = moment(this.task.date).isSame(todayDate) ? "#ff6b35" : moment(this.task.date).isBefore(todayDate) ? "#e3170a" : "#28a106"
  }

}
