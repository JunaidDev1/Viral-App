import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advance-search',
  templateUrl: './advance-search.page.html',
  styleUrls: ['./advance-search.page.scss'],
})
export class AdvanceSearchPage implements OnInit {

  users: any = [
    { img: './assets/imgs/user1.png' },
    { img: './assets/imgs/user2.png' },
    { img: './assets/imgs/user3.png' },
    { img: './assets/imgs/user4.png' },
    { img: './assets/imgs/user5.png' },
    { img: './assets/imgs/user6.png' },
    { img: './assets/imgs/user7.png' },
    { img: './assets/imgs/user8.png' },
    { img: './assets/imgs/user9.png' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
