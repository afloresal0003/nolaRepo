import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RightOfTheDayPageRoutingModule } from './right-of-the-day-routing.module';

import { RightOfTheDayPage } from './right-of-the-day.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RightOfTheDayPageRoutingModule
  ],
  declarations: [RightOfTheDayPage]
})
export class RightOfTheDayPageModule {}
