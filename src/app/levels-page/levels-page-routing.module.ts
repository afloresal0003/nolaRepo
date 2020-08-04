import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelsPagePage } from './levels-page.page';

const routes: Routes = [
  {
    path: '',
    component: LevelsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelsPagePageRoutingModule {}
