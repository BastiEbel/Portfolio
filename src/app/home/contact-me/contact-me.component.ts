import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  
  public scroll = false;
  constructor(@Inject(DOCUMENT) private document: any) {
    }

  @HostListener('window:scroll', ['$event']) onScrollEvent(event: any){
   event = window.scrollY;
    
    if(event > 3700) {
      this.scroll = true;
    } else {
      this.scroll = false;
    }
 }
  ngOnInit(): void {
  }
}
