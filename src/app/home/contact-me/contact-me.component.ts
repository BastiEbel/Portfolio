import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myContact(){
    document.getElementById('messageSend')?.classList.add('contact-send');
    document.getElementById('messageSend')?.classList.remove('d-none');
  }
}
