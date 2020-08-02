import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriesPagePageRoutingModule } from './categories-page-routing.module';

import { CategoriesPagePage } from './categories-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriesPagePageRoutingModule
  ],
  declarations: [CategoriesPagePage]
})
export class CategoriesPagePageModule {}
