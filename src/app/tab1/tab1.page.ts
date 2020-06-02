import { Component, OnInit } from '@angular/core';

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

  allPosts: any = [
    { userImg: './assets/imgs/user6.png', img: './assets/imgs/post1.png' },
    { userImg: './assets/imgs/user7.png', img: './assets/imgs/post2.png' },
    { userImg: './assets/imgs/user8.png', img: './assets/imgs/post3.png' },
  ];

  constructor() { }

  ngOnInit() {
  }


  closeModal(e: any) {
    if (e.target.id === 'mainContainer') {
      this.createPost = false;
    }
  }

}
