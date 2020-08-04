import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelThreequestion4Page } from './level-threequestion4.page';

const routes: Routes = [
  {
    path: '',
    component: LevelThreequestion4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelThreequestion4PageRoutingModule {}
