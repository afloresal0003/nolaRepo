import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TryAgainEndPageRoutingModule } from './try-again-end-routing.module';

import { TryAgainEndPage } from './try-again-end.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TryAgainEndPageRoutingModule
  ],
  declarations: [TryAgainEndPage]
})
export class TryAgainEndPageModule {}
