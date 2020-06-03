import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  activeTab = 'activity';
  dummyItems: any = [1, 2, 3, 4, 5, 6, 7];
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 2.3
  };

  constructor() { }

  ngOnInit() {
  }

}
