import { animate, style, transition, trigger } from '@angular/animations';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-contact-me',
  animations: [
    trigger('myH1Trigger', [
      transition(':enter', [
        style({ transform: 'translateX(1000px)', opacity: 0 }),
        animate(
          '500ms ease-in-out',
          style({ transform: 'translateX(0px)', opacity: 1 })
        ),
      ]),
      transition(':leave', [animate('100ms', style({ opacity: 0 }))]),
    ]),
    trigger('mySpanTrigger', [
      transition(':enter', [
        style({ transform: 'translateX(1000px)', opacity: 0 }),
        animate(
          '500ms 225ms ease-in-out',
          style({ transform: 'translateX(0px)', opacity: 1 })
        ),
      ]),
      transition(':leave', [animate('100ms', style({ opacity: 0 }))]),
    ]),
    trigger('myFormTrigger', [
      transition(':enter', [
        style({ transform: 'translateX(1000px)', opacity: 0 }),
        animate(
          '500ms 500ms ease-in-out',
          style({ transform: 'translateX(0px)', opacity: 1 })
        ),
      ]),
      transition(':leave', [animate('100ms', style({ opacity: 0 }))]),
    ]),
  ],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent implements OnInit {
  @Input() isOpen: any;
  constructor(private el: ElementRef, private cdref: ChangeDetectorRef) {}

  @HostListener('window:scroll', ['$event']) onScrollEvent(event: any) {
    let element = this.el.nativeElement.offsetTop - window.innerHeight;
    let elHeight = this.el.nativeElement.clientHeight;
    let pos = window.pageYOffset - 100;

    if (pos >= element || elHeight) {
      this.isOpen = this.isOpen;
    } else {
      this.isOpen = !this.isOpen;
    }
  }

  ngOnInit(): void {}
  ngAfterViewChecked() {
    this.isOpen = true;
    this.cdref.detectChanges();
    return this.isOpen;
  }
}
