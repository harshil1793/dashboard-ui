import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SmallWidgetsComponent } from './small-widgets/small-widgets.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SmallWidgetsComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
