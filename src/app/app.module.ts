import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Contacts } from '@ionic-native/contacts';
import { SelectContactPage } from './select-contact/select-contact.page';
import { ConfirmContactPage } from './confirm-contact/confirm-contact.page';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import * as firebase from 'firebase';
import { Crop } from '@ionic-native/crop/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';


var firebaseConfig = {
  apiKey: "AIzaSyA5OhUVfXueVXKzHkswdZK_87f_m_b8h9A",
  authDomain: "nemesis-d3a6e.firebaseapp.com",
  databaseURL: "https://nemesis-d3a6e.firebaseio.com",
  projectId: "nemesis-d3a6e",
  storageBucket: "nemesis-d3a6e.appspot.com",
  messagingSenderId: "35811702656",
  appId: "1:35811702656:web:708f9c326b38a0be06b365",
  measurementId: "G-LXE81Q5GZN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


@NgModule({
  declarations: [
    AppComponent,
    SelectContactPage,
    ConfirmContactPage,
  ],
  entryComponents: [
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Contacts,
    SocialSharing,
    Crop,
    Camera,
    LocalNotifications,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
