import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelTwoQuestion1Page } from './level-two-question1.page';

const routes: Routes = [
  {
    path: '',
    component: LevelTwoQuestion1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelTwoQuestion1PageRoutingModule {}
