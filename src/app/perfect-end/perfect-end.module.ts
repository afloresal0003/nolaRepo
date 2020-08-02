import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfectEndPageRoutingModule } from './perfect-end-routing.module';

import { PerfectEndPage } from './perfect-end.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfectEndPageRoutingModule
  ],
  declarations: [PerfectEndPage]
})
export class PerfectEndPageModule {}
