import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelTwoquestion5PageRoutingModule } from './level-twoquestion5-routing.module';

import { LevelTwoquestion5Page } from './level-twoquestion5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelTwoquestion5PageRoutingModule
  ],
  declarations: [LevelTwoquestion5Page]
})
export class LevelTwoquestion5PageModule {}
