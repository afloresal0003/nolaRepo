import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeveTwoQuestion5Page } from './leve-two-question5.page';

const routes: Routes = [
  {
    path: '',
    component: LeveTwoQuestion5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeveTwoQuestion5PageRoutingModule {}
