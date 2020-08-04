import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeveTwoQuestion3PageRoutingModule } from './leve-two-question3-routing.module';

import { LeveTwoQuestion3Page } from './leve-two-question3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeveTwoQuestion3PageRoutingModule
  ],
  declarations: [LeveTwoQuestion3Page]
})
export class LeveTwoQuestion3PageModule {}
