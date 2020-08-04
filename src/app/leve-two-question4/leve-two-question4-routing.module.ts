import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeveTwoQuestion4Page } from './leve-two-question4.page';

const routes: Routes = [
  {
    path: '',
    component: LeveTwoQuestion4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeveTwoQuestion4PageRoutingModule {}
