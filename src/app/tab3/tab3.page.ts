import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
