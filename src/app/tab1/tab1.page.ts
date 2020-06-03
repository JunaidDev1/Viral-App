import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  activeTab = 'feed';
  createPost: boolean;
  slideOpts = {
    autoplay: true,
    speed: 400,
  };
  rotation = 0;

  allPosts: any = [
    { userImg: './assets/imgs/user6.png', img: './assets/imgs/post1.png' },
    { userImg: './assets/imgs/user7.png', img: './assets/imgs/post2.png' },
    { userImg: './assets/imgs/user8.png', img: './assets/imgs/post3.png' },
  ];

  constructor(
    public router: Router,
    public actionSheetCtrl: ActionSheetController
  ) { }


  ngOnInit() {
    setInterval(() => {
      this.rotateMusicIcon();
    }, 30);
  }


  rotateMusicIcon() {
    this.rotation++;
    if (this.rotation === 360) {
      this.rotation = 0;
    }
  }


  othersProfile() {
    this.router.navigate(['/others-profile']);
  }


  closeModal(e: any) {
    if (e.target.id === 'mainContainer') {
      this.createPost = false;
    }
  }


  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [{
        text: 'Add to story',
        handler: () => {

        }
      }, {
        text: 'Forward to friend',
        handler: () => {

        }
      }, {
        text: 'Unfollow',
        handler: () => {

        }
      }, {
        text: 'Block',
        handler: () => {

        }
      }, {
        text: 'Report',
        handler: () => {

        }
      }, {
        text: 'Turn on post notifications',
        handler: () => {

        }
      }]
    });
    await actionSheet.present();
  }


}
