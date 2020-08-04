import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelThreequestion1Page } from './level-threequestion1.page';

const routes: Routes = [
  {
    path: '',
    component: LevelThreequestion1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelThreequestion1PageRoutingModule {}
