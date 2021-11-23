import {Component, ElementRef, EventEmitter, Output, ViewChild} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private router: Router, private activatedroute: ActivatedRoute) {
  }

  storeValue: Array<any>;
  firstname: string;
  lastname: string;
  counter: number = 0;
  store: object;
  @ViewChild("email") Email: ElementRef;
  @ViewChild("password") Password: ElementRef;

  submitValue = ($event: any) => {
    this.storeValue = JSON.parse(localStorage.getItem("userDetails"));

    if (this.storeValue) {
      const loggedInUser = this.storeValue.find((user) => {
        return user.email === this.Email.nativeElement.value;
      })
      if (!loggedInUser || loggedInUser.password !== this.Password.nativeElement.value) {
        alert("Please check your login data.")
        return;
      }
      sessionStorage.setItem("userDetails", JSON.stringify(loggedInUser));
      this.router.navigate(['welcome'], {
        queryParams: {
          firstname: loggedInUser.firstname,
          lastname: loggedInUser.lastname
        }
      })
    } else {
      alert("No users registered.")
    }
  }
}
