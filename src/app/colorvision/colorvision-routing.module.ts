import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorvisionPage } from './colorvision.page';

const routes: Routes = [
  {
    path: '',
    component: ColorvisionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColorvisionPageRoutingModule {}
