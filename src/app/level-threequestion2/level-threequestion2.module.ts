import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelThreequestion2PageRoutingModule } from './level-threequestion2-routing.module';

import { LevelThreequestion2Page } from './level-threequestion2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelThreequestion2PageRoutingModule
  ],
  declarations: [LevelThreequestion2Page]
})
export class LevelThreequestion2PageModule {}
