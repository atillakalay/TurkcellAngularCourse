import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'anasayfa', pathMatch: 'full' },
  { path: 'anasayfa', component: HomePageComponent },
  { path: 'birinci-sayfa', component: FirstPageComponent },
  { path: 'ikinci-sayfa/:id', component: SecondPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
