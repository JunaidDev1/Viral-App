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
    path: 'others-profile/:id',
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
  {
    path: 'chat-screen/:id',
    loadChildren: () => import('./chat-screen/chat-screen.module').then( m => m.ChatScreenPageModule)
  },
  {
    path: 'advance-search',
    loadChildren: () => import('./advance-search/advance-search.module').then( m => m.AdvanceSearchPageModule)
  },
  {
    path: 'select-contact',
    loadChildren: () => import('./select-contact/select-contact.module').then( m => m.SelectContactPageModule)
  },
  {
    path: 'confirm-contact',
    loadChildren: () => import('./confirm-contact/confirm-contact.module').then( m => m.ConfirmContactPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'chnage-password',
    loadChildren: () => import('./chnage-password/chnage-password.module').then( m => m.ChnagePasswordPageModule)
  },
  {
    path: 'blocked-list',
    loadChildren: () => import('./blocked-list/blocked-list.module').then( m => m.BlockedListPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'terms-services',
    loadChildren: () => import('./terms-services/terms-services.module').then( m => m.TermsServicesPageModule)
  },
  {
    path: 'image-viewer',
    loadChildren: () => import('./image-viewer/image-viewer.module').then( m => m.ImageViewerPageModule)
  },
  {
    path: 'post-comments',
    loadChildren: () => import('./post-comments/post-comments.module').then( m => m.PostCommentsPageModule)
  },
  {
    path: 'view-story',
    loadChildren: () => import('./view-story/view-story.module').then( m => m.ViewStoryPageModule)
  },
  {
    path: 'nemesis',
    loadChildren: () => import('./nemesis/nemesis.module').then( m => m.NemesisPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
