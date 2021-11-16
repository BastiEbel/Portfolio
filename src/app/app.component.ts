import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(public router: Router) {}
}
