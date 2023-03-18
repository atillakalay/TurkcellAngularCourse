import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleResolver } from './example.resolver';
import { AComponent } from './pages/a/a.component';
import { BComponent } from './pages/b/b.component';

const routes: Routes = [
  { path: "", redirectTo: "/a", pathMatch: 'full' },
  { path: "a", component: AComponent },
  { path: "b", component: BComponent, resolve: { postList: ExampleResolver } },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
