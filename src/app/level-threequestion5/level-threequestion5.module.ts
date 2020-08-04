import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelThreequestion5PageRoutingModule } from './level-threequestion5-routing.module';

import { LevelThreequestion5Page } from './level-threequestion5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelThreequestion5PageRoutingModule
  ],
  declarations: [LevelThreequestion5Page]
})
export class LevelThreequestion5PageModule {}
