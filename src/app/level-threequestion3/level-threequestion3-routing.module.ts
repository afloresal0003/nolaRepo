import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelThreequestion3Page } from './level-threequestion3.page';

const routes: Routes = [
  {
    path: '',
    component: LevelThreequestion3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelThreequestion3PageRoutingModule {}
