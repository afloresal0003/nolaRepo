import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeveTwoQuestion5PageRoutingModule } from './leve-two-question5-routing.module';

import { LeveTwoQuestion5Page } from './leve-two-question5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeveTwoQuestion5PageRoutingModule
  ],
  declarations: [LeveTwoQuestion5Page]
})
export class LeveTwoQuestion5PageModule {}
