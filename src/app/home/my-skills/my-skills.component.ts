import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {

  scrolling: boolean;
  constructor() {
      this.scrolling = false;
    }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any){
   // console.log($event['Window']);
    
    if(!this.scrolling) {
      this.scrolling = true;
    }
    
 }

  ngOnInit(): void {
  }
}
