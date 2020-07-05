import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-story',
  templateUrl: './view-story.page.html',
  styleUrls: ['./view-story.page.scss'],
})
export class ViewStoryPage implements OnInit {

  showViewers: boolean;
  allUsers: any = [
    { profileUrl: './assets/imgs/user9.png' },
    { profileUrl: './assets/imgs/user8.png' },
    { profileUrl: './assets/imgs/user7.png' },
    { profileUrl: './assets/imgs/user6.png' },
    { profileUrl: './assets/imgs/user9.png' },
    { profileUrl: './assets/imgs/user8.png' },
    { profileUrl: './assets/imgs/user7.png' },
    { profileUrl: './assets/imgs/user6.png' },
  ]

  constructor() { }

  ngOnInit() {
  }

  closeModal(e: any) {
    if (e.target.id === 'mainContainer') {
      this.showViewers = false;
    }
  }

}
