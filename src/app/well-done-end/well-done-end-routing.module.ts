import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WellDoneEndPage } from './well-done-end.page';

const routes: Routes = [
  {
    path: '',
    component: WellDoneEndPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WellDoneEndPageRoutingModule {}
