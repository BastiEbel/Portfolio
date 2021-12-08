import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { HomeComponent } from './home/home.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'data-protection', component: DataProtectionComponent },
  { path: 'imprint', component: ImprintComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 25]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
