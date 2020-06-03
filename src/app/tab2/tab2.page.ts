import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  dummyItems: any = [1, 2, 3, 4, 5, 6];

  slides: any = [
    { img: './assets/imgs/user12.png' },
    { img: './assets/imgs/user4.png' },
    { img: './assets/imgs/user5.png' },
    { img: './assets/imgs/story1.png' },
    { img: './assets/imgs/user12.png' },
    { img: './assets/imgs/user4.png' },
    { img: './assets/imgs/user5.png' },
    { img: './assets/imgs/story1.png' },
  ];

  slideOpts = {
    initialSlide: 1,
    slidesPerView: 2
  };


  constructor() { }

  ngOnInit() {
  }

}
