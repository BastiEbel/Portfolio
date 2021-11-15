import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  scroll: boolean;
  constructor() {
      this.scroll = false;
    }

  @HostListener('window:scroll', ['$event']) onScrollEvent(event: Event): void{

    if(window.pageYOffset > 3600) {
      this.scroll = true;
    } else{
      this.scroll = false;
    }
    
 }
  ngOnInit(): void {
  }
}
