import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelTwoquestion5Page } from './level-twoquestion5.page';

const routes: Routes = [
  {
    path: '',
    component: LevelTwoquestion5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelTwoquestion5PageRoutingModule {}
