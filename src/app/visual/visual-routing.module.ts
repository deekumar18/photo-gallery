import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualPage } from './visual.page';

const routes: Routes = [
  {
    path: '',
    component: VisualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualPageRoutingModule {}
