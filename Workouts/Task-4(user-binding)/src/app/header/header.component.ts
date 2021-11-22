import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {

    firstname: string;
    lastname: string;
    constructor(private activatedroute: ActivatedRoute) {
        this.activatedroute.queryParams.subscribe(params => {
            this.firstname = params.firstname;
            this.lastname = params.lastname;
        });

    }

    clear() {
        sessionStorage.clear();
    }


}
