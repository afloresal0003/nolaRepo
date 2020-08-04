import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelThreequestion2Page } from './level-threequestion2.page';

const routes: Routes = [
  {
    path: '',
    component: LevelThreequestion2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelThreequestion2PageRoutingModule {}
