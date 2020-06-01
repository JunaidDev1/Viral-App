import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  activeTab = 'charts';
  dummyItems: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  musicList: Array<any> = [
    './assets/imgs/music2.png', './assets/imgs/music3.png', './assets/imgs/music4.png', './assets/imgs/music5.png',
  ];

  playList: Array<any> = [
    { img: './assets/imgs/post1.png', title: 'Most Played' },
    { img: './assets/imgs/post2.png', title: 'Recently Played' },
    { img: './assets/imgs/post3.png', title: 'Newly Added' },
    { img: './assets/imgs/story1.png', title: 'Favourite' },
    { img: './assets/imgs/story2.png', title: 'Workout' },
    { img: './assets/imgs/post1.png', title: 'Most Played' },
    { img: './assets/imgs/post2.png', title: 'Recently Played' },
    { img: './assets/imgs/post3.png', title: 'Newly Added' },
    { img: './assets/imgs/story1.png', title: 'Favourite' },
    { img: './assets/imgs/story2.png', title: 'Workout' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
