import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CvcalcPage } from './cvcalc.page';

const routes: Routes = [
  {
    path: '',
    component: CvcalcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvcalcPageRoutingModule {}
