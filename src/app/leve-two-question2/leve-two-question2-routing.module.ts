import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeveTwoQuestion2Page } from './leve-two-question2.page';

const routes: Routes = [
  {
    path: '',
    component: LeveTwoQuestion2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeveTwoQuestion2PageRoutingModule {}
