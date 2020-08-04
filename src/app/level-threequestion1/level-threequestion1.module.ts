import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelThreequestion1PageRoutingModule } from './level-threequestion1-routing.module';

import { LevelThreequestion1Page } from './level-threequestion1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelThreequestion1PageRoutingModule
  ],
  declarations: [LevelThreequestion1Page]
})
export class LevelThreequestion1PageModule {}
