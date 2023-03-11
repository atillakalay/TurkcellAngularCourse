import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './adminPages/admin-layout/admin-layout.component';
import { AdminHomeComponent } from './adminPages/home/home.component';
import { MemberComponent } from './adminPages/member/member.component';
import { ReportComponent } from './adminPages/report/report.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: "", component: HomeComponent },
      { path: "hakkinda", component: AboutComponent },
      { path: "iletisim", component: ContactComponent },
      { path: "galeri", component: GalleryComponent },
    ]
  },
  {
    path: "admin", component: AdminLayoutComponent, children: [
      { path: "anasayfa", component: AdminHomeComponent },
      { path: "uyeler", component: MemberComponent },
      { path: "raporlar", component: ReportComponent },
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
