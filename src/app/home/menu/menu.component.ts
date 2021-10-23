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
    document.getElementById('aboutMe')?.scrollIntoView();
  }

  toMyWork(){
    document.getElementById('myWork')?.scrollIntoView();
  }
}
