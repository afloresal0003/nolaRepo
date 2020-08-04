import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeveTwoQuestion4PageRoutingModule } from './leve-two-question4-routing.module';

import { LeveTwoQuestion4Page } from './leve-two-question4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeveTwoQuestion4PageRoutingModule
  ],
  declarations: [LeveTwoQuestion4Page]
})
export class LeveTwoQuestion4PageModule {}
