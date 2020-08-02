import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TryAgainEndPage } from './try-again-end.page';

const routes: Routes = [
  {
    path: '',
    component: TryAgainEndPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TryAgainEndPageRoutingModule {}
