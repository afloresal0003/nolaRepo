import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelTwoQuestion1PageRoutingModule } from './level-two-question1-routing.module';

import { LevelTwoQuestion1Page } from './level-two-question1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelTwoQuestion1PageRoutingModule
  ],
  declarations: [LevelTwoQuestion1Page]
})
export class LevelTwoQuestion1PageModule {}
