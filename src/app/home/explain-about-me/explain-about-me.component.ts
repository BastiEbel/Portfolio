import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-explain-about-me',
  template: `<div id="aboutMe" (scroll)="onScrollEvent($event)" class="container"></div>`,
  templateUrl: './explain-about-me.component.html',
  styleUrls: ['./explain-about-me.component.scss']
})
export class ExplainAboutMeComponent implements OnInit {
  
  public scroll = false;
  constructor(@Inject(DOCUMENT) private document: any) {
    }

  @HostListener('window:scroll', ['$event']) onScrollEvent(event: any){
   let position = window.scrollY;
    
    if(position > 2600) {
      this.scroll = true;
    } else {
      this.scroll = false;
    }
 }

  ngOnInit(): void {
  }

}
