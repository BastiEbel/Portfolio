import { ViewportScroller } from '@angular/common';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  isShow: boolean | undefined;
  topPosToStartShowing = 100;
  @Input() imprintMode = false;
  @Input() isOpen = true;

  constructor(public view: ViewportScroller, private router: Router) {}

  ngOnInit(): void {}

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

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

  toMySkill() {
    this.view.scrollToAnchor('myskills');
  }

  toMyWork() {
    this.view.scrollToAnchor('myWork');
  }

  toAboutMe() {
    this.view.scrollToAnchor('aboutMe');
  }

  toMyContact() {
    document.getElementById('contactMe')?.scrollIntoView({ block: 'center' });
  }
}
