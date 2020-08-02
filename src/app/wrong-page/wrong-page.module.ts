import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WrongPagePageRoutingModule } from './wrong-page-routing.module';

import { WrongPagePage } from './wrong-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WrongPagePageRoutingModule
  ],
  declarations: [WrongPagePage]
})
export class WrongPagePageModule {}
