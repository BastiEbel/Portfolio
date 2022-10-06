import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  animations: [
    trigger('myWorkTrigger', [
      transition(':enter', [
        style({ transform: 'translateX(500px)', opacity: 0 }),
        animate(
          '500ms ease-in-out',
          style({ transform: 'translateX(0px)', opacity: 1 })
        ),
      ]),
      transition(':leave', [animate('100ms', style({ opacity: 0 }))]),
    ]),
    trigger('myBtnAllTrigger', [
      transition(':enter', [
        style({ transform: 'translateX(1000px)', opacity: 0 }),
        animate(
          '500ms 225ms ease-in-out',
          style({ transform: 'translateX(0px)', opacity: 1 })
        ),
      ]),
      transition(':leave', [animate('100ms', style({ opacity: 0 }))]),
    ]),
    trigger('myBtnAngularTrigger', [
      transition(':enter', [
        style({ transform: 'translateX(1000px)', opacity: 0 }),
        animate(
          '500ms 300ms ease-in-out',
          style({ transform: 'translateX(0px)', opacity: 1 })
        ),
      ]),
      transition(':leave', [animate('100ms', style({ opacity: 0 }))]),
    ]),
    trigger('myBtnJsTrigger', [
      transition(':enter', [
        style({ transform: 'translateX(1000px)', opacity: 0 }),
        animate(
          '500ms 450ms ease-in-out',
          style({ transform: 'translateX(0px)', opacity: 1 })
        ),
      ]),
      transition(':leave', [animate('100ms', style({ opacity: 0 }))]),
    ]),
    trigger('myJoinTrigger', [
      transition(':enter', [
        style({ transform: 'translateX(1000px)', opacity: 0 }),
        animate(
          '500ms 750ms ease-in-out',
          style({ transform: 'translateX(0px)', opacity: 1 })
        ),
      ]),
      transition(':leave', [animate('100ms', style({ opacity: 0 }))]),
    ]),
    trigger('myPepeTrigger', [
      transition(':enter', [
        style({ transform: 'translateX(1000px)', opacity: 0 }),
        animate(
          '500ms 1s ease-in-out',
          style({ transform: 'translateX(0px)', opacity: 1 })
        ),
      ]),
      transition(':leave', [animate('100ms', style({ opacity: 0 }))]),
    ]),
    trigger('mySiteTrigger', [
      transition(':enter', [
        style({ transform: 'translateX(1000px)', opacity: 0 }),
        animate(
          '500ms 1.25s ease-in-out',
          style({ transform: 'translateX(0px)', opacity: 1 })
        ),
      ]),
      transition(':leave', [animate('100ms', style({ opacity: 0 }))]),
    ]),
    trigger('ringOfFireTrigger', [
      transition(':enter', [
        style({ transform: 'translateX(1000px)', opacity: 0 }),
        animate(
          '500ms 1.5s ease-in-out',
          style({ transform: 'translateX(0px)', opacity: 1 })
        ),
      ]),
      transition(':leave', [animate('100ms', style({ opacity: 0 }))]),
    ]),
    trigger('coinApiTrigger', [
      transition(':enter', [
        style({ transform: 'translateX(1000px)', opacity: 0 }),
        animate(
          '500ms 1.75s ease-in-out',
          style({ transform: 'translateX(0px)', opacity: 1 })
        ),
      ]),
      transition(':leave', [animate('100ms', style({ opacity: 0 }))]),
    ]),
    trigger('slackCloneTrigger', [
      transition(':enter', [
        style({ transform: 'translateX(1000px)', opacity: 0 }),
        animate(
          '500ms 2s ease-in-out',
          style({ transform: 'translateX(0px)', opacity: 1 })
        ),
      ]),
      transition(':leave', [animate('100ms', style({ opacity: 0 }))]),
    ]),
  ],
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss'],
})
export class MyWorkComponent implements OnInit {
  public isOpen: boolean = false;
  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', ['$event']) onScrollEvent(event: any) {
    let element = this.el.nativeElement.offsetTop - window.innerHeight;
    let elHeight = this.el.nativeElement.clientHeight;
    let pos = window.pageYOffset;

    if (pos >= element || elHeight) {
      this.isOpen = true;
    } else {
      this.isOpen = false;
    }
  }

  ngOnInit(): void {}

  pepe(url: string) {
    window.open(url, '_blank');
  }

  portfolio(url: string) {
    window.open(url, '_blank');
  }

  slack(url: string) {
    window.open(url, '_blank');
  }

  ringoffire(url: string) {
    window.open(url, '_blank');
  }

  coin(url: string) {
    window.open(url, '_blank');
  }

  btnAll() {
    document.getElementById('all')?.classList.add('isSelected');
    document.getElementById('containerJS')?.classList.remove('d-none');
    document.getElementById('containerJavaScript')?.classList.remove('d-none');
    document.getElementById('containerAngular')?.classList.remove('d-none');
    document.getElementById('containerJS')?.classList.add('container-picture');
    document
      .getElementById('containerJavaScript')
      ?.classList.add('container-picture');
    document
      .getElementById('containerAngular')
      ?.classList.add('container-picture');
    document.getElementById('angular')?.classList.remove('isSelected');
    document.getElementById('javaScript')?.classList.remove('isSelected');
  }

  btnAngular() {
    document.getElementById('angular')?.classList.add('isSelected');
    document.getElementById('containerJS')?.classList.add('d-none');
    document.getElementById('containerJavaScript')?.classList.add('d-none');
    document.getElementById('containerAngular')?.classList.remove('d-none');
    document
      .getElementById('containerJS')
      ?.classList.remove('container-picture');
    document
      .getElementById('containerJavaScript')
      ?.classList.remove('container-picture');
    document
      .getElementById('containerAngular')
      ?.classList.add('container-picture');
    document.getElementById('all')?.classList.remove('isSelected');
    document.getElementById('javaScript')?.classList.remove('isSelected');
  }

  btnJavaScript() {
    document.getElementById('all')?.classList.remove('isSelected');
    document.getElementById('containerJS')?.classList.remove('d-none');
    document.getElementById('containerJavaScript')?.classList.remove('d-none');
    document.getElementById('containerAngular')?.classList.add('d-none');
    document.getElementById('containerJS')?.classList.add('container-picture');
    document
      .getElementById('containerJavaScript')
      ?.classList.add('container-picture');
    document
      .getElementById('containerAngular')
      ?.classList.remove('container-picture');
    document.getElementById('angular')?.classList.remove('isSelected');
    document.getElementById('javaScript')?.classList.add('isSelected');
  }
}
