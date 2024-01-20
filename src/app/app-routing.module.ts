import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { FormComponent } from './layout/form/form.component';
import { DesignSecComponent } from './layout/design-sec/design-sec.component';
import { MultipleDivComponent } from './layout/multiple-div/multiple-div.component';
import { DemoComponent } from './layout/demo/demo.component';
import { FacebookComponent } from './layout/facebook/facebook.component';
import { BootstrapComponent } from './layout/bootstrap/bootstrap.component';
import { PortfolioComponent } from './layout/portfolio/portfolio.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent
  },
  {
    path:'form',
    component:FormComponent
  },
  {
    path:'design',
    component:DesignSecComponent
  },
  {path:'multiple',
  component:MultipleDivComponent
  },
  {
    path:'demo',
    component:DemoComponent
  },
  {
    path:'facebook',
    component:FacebookComponent
  },
  {
    path:'bootstrap',
    component:BootstrapComponent
  },
  {
    path:'portfolio',
    component:PortfolioComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
