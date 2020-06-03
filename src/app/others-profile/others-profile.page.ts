import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-others-profile',
  templateUrl: './others-profile.page.html',
  styleUrls: ['./others-profile.page.scss'],
})
export class OthersProfilePage implements OnInit {

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
