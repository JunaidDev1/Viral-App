import { Component, OnInit } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/tabs/tab1',
      icon: './assets/imgs/home.png'
    },
    {
      title: 'Hot Or Not',
      url: '/tabs/tab5',
      icon: './assets/imgs/hot.png'
    },
    {
      title: 'Invite',
      url: '/tabs/tab1',
      icon: './assets/imgs/invite.png'
    },
    {
      title: 'About Us',
      url: '/tabs/tab1',
      icon: './assets/imgs/about-us.png'
    },
    {
      title: 'Settings',
      url: '/tabs/tab1',
      icon: './assets/imgs/settings.png'
    },
    {
      title: 'Logout',
      url: '/login',
      icon: './assets/imgs/logout.png'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.statusBar.backgroundColorByHexString('#e03a3c');
      this.splashScreen.hide();
    });
  }

  ngOnInit() {

  }


  toProfile() {
    this.navCtrl.navigateRoot(['/profile']);
  }

}
