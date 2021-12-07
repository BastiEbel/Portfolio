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
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

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
    NgxPageScrollCoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    ScrollToModule.forRoot(),
    RouterModule.forRoot(
			[],
			{
 
				// In order to get anchor / fragment scrolling to work at all, we need to
				// enable it on the router.
				anchorScrolling: "enabled",
 
				// Once the above is enabled, the fragment link will only work on the
				// first click. This is because, by default, the Router ignores requests
				// to navigate to the SAME URL that is currently rendered. Unfortunately,
				// the fragment scrolling is powered by Navigation Events. As such, we
				// have to tell the Router to re-trigger the Navigation Events even if we
				// are navigating to the same URL.
				onSameUrlNavigation: "reload",
 
				// Let's enable tracing so that we can see the aforementioned Navigation
				// Events when the fragment is clicked.
				enableTracing: true,
				scrollPositionRestoration: "enabled"
			}
		),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
