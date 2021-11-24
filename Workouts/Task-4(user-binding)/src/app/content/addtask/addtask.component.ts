import { Component } from '@angular/core';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent {
  task: Array<any> = [];
  taskvalue: string;
  d: any;
  addTask() {
    this.task = JSON.parse(localStorage.getItem("task"));
    if (this.taskvalue == null || this.taskvalue == '') {
      alert("Kindly please enter any task to add in a list");
    }
    else {
      this.d = new Date();
      console.log(this.d);
      if (this.task = this.task || []) {
        localStorage.setItem("task", '[]')
      }

      this.task.push(
        {
          task: this.taskvalue,
          date: this.d
        }
      );

      console.log(this.task);
      localStorage.setItem("task", JSON.stringify(this.task));
      this.taskvalue = '';

    }

  }
}
