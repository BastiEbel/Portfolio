import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-explain-about-me',
  animations: [
    trigger('myImgTrigger', [
      transition(':enter', [
        style({
          transform: 'translateX(500px)',
          opacity: 0
        }),
        animate('500ms ease-in-out', style({
          transform: 'translateX(0px)',
          opacity: 1
        })),
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('myShortTrigger', [
      transition(':enter', [
        style({
          transform: 'translateX(1000px)',
          opacity: 0
        }),
        animate('500ms 225ms ease-in-out', style({
          transform: 'translateX(0px)',
          opacity: 1
        })),
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('myBeganTrigger', [
      transition(':enter', [
        style({
          transform: 'translateX(1000px)',
          opacity: 0
        }),
        animate('500ms 500ms ease-in-out', style({
          transform: 'translateX(0px)',
          opacity: 1
        })),
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('myFellTrigger', [
      transition(':enter', [
        style({
          transform: 'translateX(1000px)',
          opacity: 0
        }),
        animate('500ms 750ms ease-in-out', style({
          transform: 'translateX(0px)',
          opacity: 1
        })),
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('mySearchedTrigger', [
      transition(':enter', [
        style({
          transform: 'translateX(1000px)',
          opacity: 0
        }),
        animate('500ms 1s ease-in-out', style({
          transform: 'translateX(0px)',
          opacity: 1
        })),
      ])
    ]),
    trigger('myChallengeTrigger', [
      transition(':enter', [
        style({
          transform: 'translateX(1000px)',
          opacity: 0
        }),
        animate('500ms 1.25s ease-in-out', style({
          transform: 'translateX(0px)',
          opacity: 1
        })),
      ])
    ]),
  ],
  templateUrl: './explain-about-me.component.html',
  styleUrls: ['./explain-about-me.component.scss']
})
export class ExplainAboutMeComponent implements OnInit {

  isOpen = false;
  constructor() {
    }

  @HostListener('window:scroll', ['$event']) onScrollEvent(event: any){
    let pos = (document.documentElement.scrollTop || document.body.scrollTop);
    if(pos > 3200){
      document.getElementById('explainBorder')?.classList.add('explain-border');
      this.isOpen = true;
    } else {
      this.isOpen = false;
      document.getElementById('explainBorder')?.classList.remove('explain-border');
    }
 }

  ngOnInit(): void {
  }

}
