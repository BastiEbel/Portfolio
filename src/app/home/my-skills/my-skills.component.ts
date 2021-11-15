import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {

  public scroll = false;
  constructor(@Inject(DOCUMENT) private document: any) {
    }

  @HostListener('window:scroll', ['$event']) onScrollEvent(event: any){
   let position = window.scrollY;
    
    if(position > 100) {
      this.scroll = true;
    } else {
      this.scroll = false;
    }
 }

  ngOnInit(): void {
  }
}
