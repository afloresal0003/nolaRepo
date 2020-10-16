import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { APCSPPagePageRoutingModule } from './apcsppage-routing.module';

import { APCSPPagePage } from './apcsppage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    APCSPPagePageRoutingModule
  ],
  declarations: [APCSPPagePage]
})
export class APCSPPagePageModule {}
