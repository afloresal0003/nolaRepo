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
    path: 'categories',
    loadChildren: () => import('./categories-page/categories-page.module').then( m => m.CategoriesPagePageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FAQPageModule)
  },
  {
    path: 'level-two-question1',
    loadChildren: () => import('./level-two-question1/level-two-question1.module').then( m => m.LevelTwoQuestion1PageModule)
  },
  {
    path: 'leve-two-question2',
    loadChildren: () => import('./leve-two-question2/leve-two-question2.module').then( m => m.LeveTwoQuestion2PageModule)
  },
  {
    path: 'leve-two-question3',
    loadChildren: () => import('./leve-two-question3/leve-two-question3.module').then( m => m.LeveTwoQuestion3PageModule)
  },
  {
    path: 'leve-two-question4',
    loadChildren: () => import('./leve-two-question4/leve-two-question4.module').then( m => m.LeveTwoQuestion4PageModule)
  },
  {
    path: 'leve-two-question5',
    loadChildren: () => import('./leve-two-question5/leve-two-question5.module').then( m => m.LeveTwoQuestion5PageModule)
  },
  {
    path: 'level-threequestion1',
    loadChildren: () => import('./level-threequestion1/level-threequestion1.module').then( m => m.LevelThreequestion1PageModule)
  },
  {
    path: 'level-threequestion2',
    loadChildren: () => import('./level-threequestion2/level-threequestion2.module').then( m => m.LevelThreequestion2PageModule)
  },
  {
    path: 'level-threequestion3',
    loadChildren: () => import('./level-threequestion3/level-threequestion3.module').then( m => m.LevelThreequestion3PageModule)
  },
  {
    path: 'level-threequestion4',
    loadChildren: () => import('./level-threequestion4/level-threequestion4.module').then( m => m.LevelThreequestion4PageModule)
  },
  {
    path: 'level-threequestion5',
    loadChildren: () => import('./level-threequestion5/level-threequestion5.module').then( m => m.LevelThreequestion5PageModule)
  },
  {
    path: 'levels-page',
    loadChildren: () => import('./levels-page/levels-page.module').then( m => m.LevelsPagePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
