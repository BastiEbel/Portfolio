
import { ViewportScroller } from '@angular/common';
import { Component, HostListener, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  isShow: boolean | undefined;
  topPosToStartShowing = 100;
  @Input() imprintMode = false;
  

  constructor(public view: ViewportScroller) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll')
  checkScroll() {

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }



  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  tomyskill() {
    this.view.scrollToAnchor('myskills');
  }

  toMyWork() {
    this.view.scrollToAnchor('myWork');
  }

  toAboutMe() {
    this.view.scrollToAnchor('myWork');
    setTimeout(() => {
      this.view.scrollToAnchor('aboutMe');
    }, 10);
  }

  toMyContact(){
    document.getElementById('contactMe')?.scrollIntoView({block: 'center' });
  }
}
