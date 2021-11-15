import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  public scroll = false;
  constructor(@Inject(DOCUMENT) private document: any) {
    }

  @HostListener('window:scroll', ['$event']) onScrollEvent(event: any){
   let position = window.scrollY;
    
    if(position > 1050) {
      this.scroll = true;
    } else {
      this.scroll = false;
    }
 }

  ngOnInit(): void {
  }

  btnAll(){
    document.getElementById('all')?.classList.add('isSelected');
    document.getElementById('containerJS')?.classList.remove('d-none');
    document.getElementById('containerJavaScript')?.classList.remove('d-none');
    document.getElementById('containerAngular')?.classList.remove('d-none');
    document.getElementById('containerJS')?.classList.add('container-picture');
    document.getElementById('containerJavaScript')?.classList.add('container-picture');
    document.getElementById('containerAngular')?.classList.add('container-picture');
    document.getElementById('angular')?.classList.remove('isSelected');
    document.getElementById('javaScript')?.classList.remove('isSelected');
  }

  btnAngular(){
    document.getElementById('angular')?.classList.add('isSelected');
    document.getElementById('containerJS')?.classList.add('d-none');
    document.getElementById('containerJavaScript')?.classList.add('d-none');
    document.getElementById('containerAngular')?.classList.remove('d-none');
    document.getElementById('containerJS')?.classList.remove('container-picture');
    document.getElementById('containerJavaScript')?.classList.remove('container-picture');
    document.getElementById('containerAngular')?.classList.add('container-picture');
    document.getElementById('all')?.classList.remove('isSelected');
    document.getElementById('javaScript')?.classList.remove('isSelected');
  }

  btnJavaScript(){
    document.getElementById('all')?.classList.remove('isSelected');
    document.getElementById('containerJS')?.classList.remove('d-none');
    document.getElementById('containerJavaScript')?.classList.remove('d-none');
    document.getElementById('containerAngular')?.classList.add('d-none');
    document.getElementById('containerJS')?.classList.add('container-picture');
    document.getElementById('containerJavaScript')?.classList.add('container-picture');
    document.getElementById('containerAngular')?.classList.remove('container-picture');
    document.getElementById('angular')?.classList.remove('isSelected');
    document.getElementById('javaScript')?.classList.add('isSelected');
  }
}
