import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() imprintMode = true;
  constructor() { }

  ngOnInit(): void {
  }

  toAboutMe(){
    let el = document.getElementById('aboutMe');
    let y = el?.getBoundingClientRect().bottom;
    window.scrollTo({top: y, behavior: 'smooth'});
  }

  toMyWork(){
   let el = document.getElementById('myWork');
   let y = el?.getBoundingClientRect().top;
    window.scrollTo({top: y, behavior: 'smooth'});
  }
}
