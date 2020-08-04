import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelThreequestion3PageRoutingModule } from './level-threequestion3-routing.module';

import { LevelThreequestion3Page } from './level-threequestion3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelThreequestion3PageRoutingModule
  ],
  declarations: [LevelThreequestion3Page]
})
export class LevelThreequestion3PageModule {}
