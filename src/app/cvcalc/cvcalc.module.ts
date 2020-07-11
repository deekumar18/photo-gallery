import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CvcalcPageRoutingModule } from './cvcalc-routing.module';

import { CvcalcPage } from './cvcalc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CvcalcPageRoutingModule
  ],
  declarations: [CvcalcPage]
})
export class CvcalcPageModule {}
