import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorrectPagePage } from './correct-page.page';

const routes: Routes = [
  {
    path: '',
    component: CorrectPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorrectPagePageRoutingModule {}
