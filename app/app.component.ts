import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    directives: [ROUTER_DIRECTIVES],
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {

    title = "Workout App";
    constructor() {}
 }