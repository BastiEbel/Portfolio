import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
 
  constructor(private view: ViewportScroller) {
  }

  ngOnInit(): void {
  }

  tomyskill(){
    document.getElementById('myskills')?.scrollIntoView({ behavior: 'smooth'});
  }

  toMyContact(){
    document.getElementById('contactMe')?.scrollIntoView({block: 'end' });
  }
}
