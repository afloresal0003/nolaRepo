import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorrectPagePageRoutingModule } from './correct-page-routing.module';

import { CorrectPagePage } from './correct-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorrectPagePageRoutingModule
  ],
  declarations: [CorrectPagePage]
})
export class CorrectPagePageModule {}
