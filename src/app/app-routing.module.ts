import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ExplainAboutMeComponent } from './explain-about-me/explain-about-me.component';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MenuComponent } from './menu/menu.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { MyWorkComponent } from './my-work/my-work.component';

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: '', component: AboutMeComponent},
  {path: '', component: MySkillsComponent},
  {path: '', component: MyWorkComponent},
  {path: '', component: ExplainAboutMeComponent},
  {path: '', component: ContactMeComponent},
  {path: '', component: FooterComponent},
  {path: 'imprint', component: ImprintComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
