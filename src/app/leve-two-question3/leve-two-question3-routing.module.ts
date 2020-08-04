import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeveTwoQuestion3Page } from './leve-two-question3.page';

const routes: Routes = [
  {
    path: '',
    component: LeveTwoQuestion3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeveTwoQuestion3PageRoutingModule {}
