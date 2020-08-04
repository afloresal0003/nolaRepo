import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeveTwoQuestion2PageRoutingModule } from './leve-two-question2-routing.module';

import { LeveTwoQuestion2Page } from './leve-two-question2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeveTwoQuestion2PageRoutingModule
  ],
  declarations: [LeveTwoQuestion2Page]
})
export class LeveTwoQuestion2PageModule {}
