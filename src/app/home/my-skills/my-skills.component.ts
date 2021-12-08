import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  animations:[
    trigger('myInsertTrigger', [
      transition(':enter', [
        style({transform: 'translateX(1000px)',
          opacity: 0}),
          animate('500ms ease-in-out', style({transform: 'translateX(0px)',
            opacity: 1})),
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('myTrigger', [
      transition(':enter', [
        style({transform: 'translateX(1000px)',
          opacity: 0}),
          animate('500ms 225ms ease-in-out', style({transform: 'translateX(0px)',
            opacity: 1})),
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('myTrigger1', [
      transition(':enter', [
        style({transform: 'translateX(1000px)',
          opacity: 0}),
          animate('500ms 500ms ease-in-out', style({transform: 'translateX(0px)',
            opacity: 1})),
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('myTrigger2', [
      transition(':enter', [
        style({transform: 'translateX(1000px)',
          opacity: 0}),
          animate('500ms 750ms ease-in-out', style({transform: 'translateX(0px)',
            opacity: 1})),
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0 }))
      ])
    ]),
  ],
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {

  isOpen = false;

  constructor(private el: ElementRef) {
    }

  @HostListener('window:scroll', ['$event']) onScrollEvent(event: any){
    let element = this.el.nativeElement.offsetTop - window.innerHeight;
    let elHeight = this.el.nativeElement.clientHeight;
    let pos = window.pageYOffset;
    
    if(pos >= element || elHeight){
      this.isOpen = true;
    } else {
      this.isOpen = false;
    }
 }

  ngOnInit(): void {

  }
}
