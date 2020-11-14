import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharlistComponent } from './pages/charlist/charlist/charlist.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: CharlistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
