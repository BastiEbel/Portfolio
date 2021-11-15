import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  tomyskill(){
    document.getElementById('myskills')?.scrollIntoView();
  }

  toMyContact(){
    let el = document.getElementById('contactMe');
    let y = el?.getBoundingClientRect().bottom;
    window.scrollTo({top: y, behavior: 'smooth'})
  }
}
