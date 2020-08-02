import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'levelOnequestion1',
    loadChildren: () => import('./levelOnequestion1/question1.module').then( m => m.Question1PageModule)
  },
  {
    path: 'levelOnequestion2',
    loadChildren: () => import('./levelOnequestion2/question2.module').then( m => m.Question2PageModule)
  },
  {
    path: 'levelOnequestion3',
    loadChildren: () => import('./levelOnequestion3/question3.module').then( m => m.Question3PageModule)
  },
  {
    path: 'levelOnequestion4',
    loadChildren: () => import('./levelOnequestion4/question4.module').then( m => m.Question4PageModule)
  },
  {
    path: 'levelOnequestion5',
    loadChildren: () => import('./levelOnequestion5/question5.module').then( m => m.Question5PageModule)
  },
  {
    path: 'right-of-the-day',
    loadChildren: () => import('./right-of-the-day/right-of-the-day.module').then( m => m.RightOfTheDayPageModule)
  },
  {
    path: 'perfect-end',
    loadChildren: () => import('./perfect-end/perfect-end.module').then( m => m.PerfectEndPageModule)
  },
  {
    path: 'well-done-end',
    loadChildren: () => import('./well-done-end/well-done-end.module').then( m => m.WellDoneEndPageModule)
  },
  {
    path: 'try-again-end',
    loadChildren: () => import('./try-again-end/try-again-end.module').then( m => m.TryAgainEndPageModule)
  },
  {
    path: 'correct-page',
    loadChildren: () => import('./correct-page/correct-page.module').then( m => m.CorrectPagePageModule)
  },
  {
    path: 'wrong-page',
    loadChildren: () => import('./wrong-page/wrong-page.module').then( m => m.WrongPagePageModule)
  },
  {
    path: 'categories-page',
    loadChildren: () => import('./categories-page/categories-page.module').then( m => m.CategoriesPagePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
