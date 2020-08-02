import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WellDoneEndPageRoutingModule } from './well-done-end-routing.module';

import { WellDoneEndPage } from './well-done-end.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WellDoneEndPageRoutingModule
  ],
  declarations: [WellDoneEndPage]
})
export class WellDoneEndPageModule {}
