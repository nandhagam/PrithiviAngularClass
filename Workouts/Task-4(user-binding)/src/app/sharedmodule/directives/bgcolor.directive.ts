import { Directive, HostBinding, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
@Directive({
  selector: '[appBgcolor]'
})
export class BgcolorDirective implements OnInit {
  today = moment();
  todayDate = this.today.format("MM-DD-YYYY");
  @Input('appBgcolor') task: any = {};
  constructor() {
  }
  @HostBinding('style.backgroundColor') bgColor: string = '';
  @HostBinding('style.color') string = "#fff";

  ngOnInit() {
    this.dayColor();
  }
  dayColor = () => {
    this.bgColor = moment(this.task.date).isBefore(this.todayDate) ? "#e3170a" : moment(this.task.date).isSame(this.todayDate) ? "#ff6b35" : "#26532b";
  }

}
