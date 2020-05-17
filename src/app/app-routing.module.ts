import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then(m => m.ResetPasswordPageModule)
  },
  {
    path: 'search-contact',
    loadChildren: () => import('./search-contact/search-contact.module').then(m => m.SearchContactPageModule)
  },
  {
    path: 'join-nemesis',
    loadChildren: () => import('./join-nemesis/join-nemesis.module').then(m => m.JoinNemesisPageModule)
  },
  {
    path: 'rap-battle',
    loadChildren: () => import('./rap-battle/rap-battle.module').then(m => m.RapBattlePageModule)
  },
  {
    path: 'roast-battle',
    loadChildren: () => import('./roast-battle/roast-battle.module').then(m => m.RoastBattlePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'others-profile',
    loadChildren: () => import('./others-profile/others-profile.module').then(m => m.OthersProfilePageModule)
  },
  {
    path: 'music-player',
    loadChildren: () => import('./music-player/music-player.module').then(m => m.MusicPlayerPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
