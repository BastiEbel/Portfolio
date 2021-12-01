import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  isShow: boolean | undefined;
  topPosToStartShowing = 100;
  @Input() imprintMode = true;
  constructor() { }

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

  tomyskill(){
    document.getElementById('myskills')?.scrollIntoView();
  }

  toAboutMe(){
    window.scrollTo({ 
      top: 4200, 
      left: 0, 
      behavior: 'smooth',
    });
  }

  toMyWork(){
    window.scroll({ 
      top: 2050, 
      left: 0, 
      behavior: 'smooth',
    });
  }
}
