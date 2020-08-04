import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelsPagePageRoutingModule } from './levels-page-routing.module';

import { LevelsPagePage } from './levels-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelsPagePageRoutingModule
  ],
  declarations: [LevelsPagePage]
})
export class LevelsPagePageModule {}
