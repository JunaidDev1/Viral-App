import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  dummyItems: any = [1, 2, 3, 4, 5, 6];

  constructor() { }

  ngOnInit() {
  }

}
