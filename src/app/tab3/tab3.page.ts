import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewStoryPage } from '../view-story/view-story.page';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  imgs: any = [
    '/assets/imgs/story1.png', '/assets/imgs/story2.png', '/assets/imgs/story3.png', '/assets/imgs/story4.png',
    '/assets/imgs/post1.png', '/assets/imgs/post2.png', '/assets/imgs/user5.png', '/assets/imgs/story1.png'
  ]

  public stories:any=[];

  constructor(public modalCtrl:ModalController) {
    let storyItem1 = {
      userPicture: "./assets/imgs/user1.png",
      userId: 1,
      userName: "Igor",
      currentItem: 0,
      items: [{
        date: "há 20 minutos",
        duration: "5",
        id: "3",
        media: "/assets/imgs/story1.png",
        seen: true,
        type: "0",
        views: 5
      }],
      seen: true
    };

    let storyItem2 = {
      userPicture: "./assets/imgs/user1.png",
      userId: 2,
      userName: "Flávio",
      currentItem: 0,
      seen: false,
      items: [{
        date: "há 30 minutos",
        duration: "4",
        id: "64",
        media: "/assets/imgs/story2.png",
        seen: false,
        type: "0",
        views: null
      },{
        date: "há 30 minutos",
        duration: "3",
        id: "74",
        media: "/assets/imgs/story3.png",
        seen: false,
        type: "0",
        views: null
      },{
        date: "há 1 hora",
        duration: null,
        id: "84",
        media: "/assets/imgs/story4.png",
        seen: false,
        type: "1",
        views: null
      }]
    };

    let storyItem3 = {
      userPicture: "./assets/imgs/user1.png",
      userId: 1,
      userName: "Igor",
      currentItem: 0,
      items: [{
        date: "há 20 minutos",
        duration: "5",
        id: "3",
        media: "/assets/imgs/post1.png",
        seen: true,
        type: "0",
        views: 5
      }],
      seen: true
    };

    let storyItem4 = {
      userPicture: "./assets/imgs/user1.png",
      userId: 2,
      userName: "Flávio",
      currentItem: 0,
      seen: false,
      items: [{
        date: "há 30 minutos",
        duration: "4",
        id: "64",
        media: "/assets/imgs/post1.png",
        seen: false,
        type: "0",
        views: null
      },{
        date: "há 30 minutos",
        duration: "3",
        id: "74",
        media: "/assets/imgs/post2.png",
        seen: false,
        type: "0",
        views: null
      },{
        date: "há 1 hora",
        duration: null,
        id: "84",
        media: "/assets/imgs/post3.png",
        seen: false,
        type: "1",
        views: null
      }]
    };

    let storyItem5 = {
      userPicture: "./assets/imgs/user1.png",
      userId: 1,
      userName: "Igor",
      currentItem: 0,
      items: [{
        date: "há 20 minutos",
        duration: "5",
        id: "3",
        media: "/assets/imgs/post4.png",
        seen: true,
        type: "0",
        views: 5
      }],
      seen: true
    };

    this.stories.push(storyItem1);
    this.stories.push(storyItem2);
    this.stories.push(storyItem3);
    this.stories.push(storyItem4);
    this.stories.push(storyItem5);
   }

  ngOnInit() {
  }

  async  openStoryViewer(index) {
    const modal = await this.modalCtrl.create({
      component: ViewStoryPage,
      componentProps: {
        stories: this.stories, 
        tapped: index
      }
    });
    await modal.present();
  }


 

  reorderStories() {
    this.stories.sort((a, b) => {
      if (a.seen) return 1;
      if (b.seen) return -1;

      return 0;
    });
  }

}
