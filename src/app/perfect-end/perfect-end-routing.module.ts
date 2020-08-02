import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfectEndPage } from './perfect-end.page';

const routes: Routes = [
  {
    path: '',
    component: PerfectEndPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfectEndPageRoutingModule {}
