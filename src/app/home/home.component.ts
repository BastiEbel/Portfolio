import { Component, Input, OnInit } from '@angular/core';
import  {  Inject  }  from  '@angular/core' ; 
import  {  DOCUMENT  }  from  '@angular/common' ; 
import  {  PageScrollService  }  from  'ngx-page-scroll-core' ;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private  pageScrollService : PageScrollService , @Inject (DOCUMENT)  private  document: any) { }

  ngOnInit(): void {
    this.pageScrollService.scroll({ 
      document : this.document, 
      scrollTarget : '.theEnd', 
    }); 
  }

}
