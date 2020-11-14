import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharlistComponent } from './pages/charlist/charlist/charlist.component';
import { ChardetailComponent } from './pages/chardetail/chardetail/chardetail.component';

@NgModule({
  declarations: [
    AppComponent,
    CharlistComponent,
    ChardetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
