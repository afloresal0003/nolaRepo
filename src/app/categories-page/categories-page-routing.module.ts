import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesPagePage } from './categories-page.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriesPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesPagePageRoutingModule {}
