import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColorvisionPageRoutingModule } from './colorvision-routing.module';

import { ColorvisionPage } from './colorvision.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColorvisionPageRoutingModule
  ],
  declarations: [ColorvisionPage]
})
export class ColorvisionPageModule {}
