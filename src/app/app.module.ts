import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './home/menu/menu.component';
import { AboutMeComponent } from './home/about-me/about-me.component';
import { MySkillsComponent } from './home/my-skills/my-skills.component';
import { MyWorkComponent } from './home/my-work/my-work.component';
import { ExplainAboutMeComponent } from './home/explain-about-me/explain-about-me.component';
import { ContactMeComponent } from './home/contact-me/contact-me.component';
import { FooterComponent } from './home/footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { HomeComponent } from './home/home.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { DataProtectionComponent } from './data-protection/data-protection.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AboutMeComponent,
    MySkillsComponent,
    MyWorkComponent,
    ExplainAboutMeComponent,
    ContactMeComponent,
    FooterComponent,
    ImprintComponent,
    HomeComponent,
    DataProtectionComponent
  ],
  imports: [
    BrowserModule,
    ScrollToModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
