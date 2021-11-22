import { Component, ViewChild, ElementRef, Output } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  firstname: string;
  lastname: string;
  storeValue: Array<any>;
  display: boolean;

  @ViewChild("email") Email: ElementRef;
  @ViewChild("password") Password: ElementRef;


  displayDetails() {
    console.log("FirstName:" + this.firstname);
    console.log("LastName:" + this.lastname);
    console.log("Email:" + this.Email.nativeElement.value);
    console.log("Password:" + this.Password.nativeElement.value);
  }
  sendData = ($event: any) => {
    this.storeValue = JSON.parse(localStorage.getItem("userDetails"));

    for (let x in this.storeValue) {
      if (this.Email.nativeElement.value == this.storeValue[x].email) {
        this.display = true;
        alert("Entered Email Address is already in use");
        break;
      }
      else {
        this.display = false;
      }
    }
    if (!this.display) {
      if (!this.storeValue) {
        this.storeValue = [];
        localStorage.setItem("userDetails", "[]");
      }
      this.storeValue.push(
        {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.Email.nativeElement.value,
          password: this.Password.nativeElement.value
        })
      localStorage.setItem("userDetails", JSON.stringify(this.storeValue));
      alert("Registration Successfully Done...!")
    }
  }


}

