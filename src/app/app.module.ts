import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { FormComponent } from './layout/form/form.component';
import { DesignSecComponent } from './layout/design-sec/design-sec.component';
import { MultipleDivComponent } from './layout/multiple-div/multiple-div.component';
import { DemoComponent } from './layout/demo/demo.component';
import { FacebookComponent } from './layout/facebook/facebook.component';
import { BootstrapComponent } from './layout/bootstrap/bootstrap.component';
import { PortfolioComponent } from './layout/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FormComponent,
    DesignSecComponent,
    MultipleDivComponent,
    DemoComponent,
    FacebookComponent,
    BootstrapComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
