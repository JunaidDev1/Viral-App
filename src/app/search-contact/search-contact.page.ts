import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-contact',
  templateUrl: './search-contact.page.html',
  styleUrls: ['./search-contact.page.scss'],
})
export class SearchContactPage implements OnInit {

  slides: any = [
    { img: './assets/imgs/user12.png' },
    { img: './assets/imgs/user4.png' },
    { img: './assets/imgs/user5.png' },
  ]

  slideOpts = {
    autoplay: true,
    speed: 400,
  };

  constructor() { }

  ngOnInit() {
  }

}
