import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChardetailComponent } from './pages/chardetail/chardetail/chardetail.component';
import { CharfilterComponent } from './pages/charfilter/charfilter/charfilter.component';
import { CharlistComponent } from './pages/charlist/charlist/charlist.component';
import { MisfavComponent } from './pages/misfav/misfav/misfav.component';

import { GuardGuard } from './guard.guard';

const routes: Routes = [
  { path: '', component: CharlistComponent },
  { path: 'filtro', component: CharfilterComponent },
  { path: 'favoritos',canActivate: [GuardGuard], component: MisfavComponent },
  { path: 'personaje/:id/detalles',component: ChardetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
