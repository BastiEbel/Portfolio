import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-explain-about-me',
  template: `<div id="aboutMe" (scroll)="onScrollEvent($event)" class="container"></div>`,
  templateUrl: './explain-about-me.component.html',
  styleUrls: ['./explain-about-me.component.scss']
})
export class ExplainAboutMeComponent implements OnInit {
  
  scroll: boolean;
  constructor() {
      this.scroll = false;
    }

  @HostListener('window:scroll', ['$event']) onScrollEvent(event: Event): void{

    if(window.pageYOffset > 2700) {
      this.scroll = true;
    } else{
      this.scroll = false;
    }
    
 }

  ngOnInit(): void {
  }

}
