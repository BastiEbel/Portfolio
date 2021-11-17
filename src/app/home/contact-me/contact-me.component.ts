import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  animations:[
    trigger('myH1Trigger', [
      transition(':enter', [
        style({transform: 'translateX(500px)',
          opacity: 0}),
          animate('1s ease-in-out', style({transform: 'translateX(0px)',
            opacity: 1})),
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('mySpanTrigger', [
      transition(':enter', [
        style({transform: 'translateX(1000px)',
          opacity: 0}),
          animate('1s 1s ease-in-out', style({transform: 'translateX(0px)',
            opacity: 1})),
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('myFormTrigger', [
      transition(':enter', [
        style({transform: 'translateX(1000px)',
          opacity: 0}),
          animate('1s 2s ease-in-out', style({transform: 'translateX(0px)',
            opacity: 1})),
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0 }))
      ])
    ]),
  ],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  
  isOpen = false;
  constructor() {
    }

  @HostListener('window:scroll', ['$event']) onScrollEvent(event: any){
    let pos = (document.documentElement.scrollTop || document.body.scrollTop);
    if(pos > 3800){
      setTimeout(() => {
        this.isOpen = true;
      }, 1500);
    } else {
      this.isOpen = false;
    }
 }
  ngOnInit(): void {
  }
}
