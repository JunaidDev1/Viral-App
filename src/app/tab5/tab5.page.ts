import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  activeTab: string = 'featured';

  musicList: any = [
    './assets/imgs/music2.png', './assets/imgs/music3.png', './assets/imgs/music4.png', './assets/imgs/music5.png',
  ]

  constructor() { }

  ngOnInit() {
  }

}
