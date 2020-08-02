import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RightOfTheDayPage } from './right-of-the-day.page';

const routes: Routes = [
  {
    path: '',
    component: RightOfTheDayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RightOfTheDayPageRoutingModule {}
