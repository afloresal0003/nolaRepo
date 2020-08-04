import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelThreequestion5Page } from './level-threequestion5.page';

const routes: Routes = [
  {
    path: '',
    component: LevelThreequestion5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelThreequestion5PageRoutingModule {}
