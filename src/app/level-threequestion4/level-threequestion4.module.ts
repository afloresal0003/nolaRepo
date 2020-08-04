import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelThreequestion4PageRoutingModule } from './level-threequestion4-routing.module';

import { LevelThreequestion4Page } from './level-threequestion4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelThreequestion4PageRoutingModule
  ],
  declarations: [LevelThreequestion4Page]
})
export class LevelThreequestion4PageModule {}
