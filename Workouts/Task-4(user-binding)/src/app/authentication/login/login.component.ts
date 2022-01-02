import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    constructor(private router: Router) {
    }
    storeValue: Array<any>;
    firstname: string;
    lastname: string;
    counter: number = 0;
    store: object;



    /* submitValue(formData: NgForm) {
        this.storeValue = JSON.parse(localStorage.getItem("userDetails")) || [];
        for (let x in this.storeValue) {
            if (formData.controls.email.value == this.storeValue[x].email &&
                formData.controls.password.value == this.storeValue[x].password) {
                this.store = {
                    firstname: this.storeValue[x].firstname,
                    lastname: this.storeValue[x].lastname,
                    email: this.storeValue[x].email,
                    password: this.storeValue[x].password
                };
                sessionStorage.setItem("userDetails", JSON.stringify(this.store));
                this.router.navigate(['welcome'], { queryParams: { firstname: this.storeValue[x].firstname, lastname: this.storeValue[x].lastname } });
                return;
            }
        }
        for (let x in this.storeValue) {
            if (formData.controls.email.value != this.storeValue[x].email
                || formData.controls.password.value != this.storeValue[x].password) {
                this.counter = this.counter + 1;
            }
        }
        if (this.storeValue.length == this.counter) {
            alert("Entered email does not exist or check your credentials");
            this.counter = 0;
        }
    } */

    submitValue(formData: NgForm) {
        this.storeValue = JSON.parse(localStorage.getItem("userDetails")) || [];
        let index = this.storeValue.findIndex(
            (user) => user.email == formData.controls.email.value
                && user.password == formData.controls.password.value);
        console.log(index);
        /*  console.log(this.storeValue[index].firstname);
         console.log(this.storeValue[index].lastname);
         console.log(this.storeValue[index].email);
         console.log(this.storeValue[index].password); */
        if (index != -1) {
            this.store = {
                firstname: this.storeValue[index].firstname,
                lastname: this.storeValue[index].lastname,
                email: this.storeValue[index].email,
                password: this.storeValue[index].password
            };
            sessionStorage.setItem("userDetails", JSON.stringify(this.store));
            this.router.navigate(['welcome'],
                {
                    queryParams:
                    {
                        firstname: this.storeValue[index].firstname,
                        lastname: this.storeValue[index].lastname
                    }
                });
        }
        else {
            alert("Entered email does not exist or check your credentials");
        }
    }

}