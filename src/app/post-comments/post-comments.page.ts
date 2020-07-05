import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.page.html',
  styleUrls: ['./post-comments.page.scss'],
})
export class PostCommentsPage implements OnInit {

  comments: any = [
    {
      profileUrl: './assets/imgs/user1.png',
      fullName: 'Angelina Julie',
      replies: [
        { fullName: 'Marrie Doe' },
        { fullName: 'Smith Jam' },
        { fullName: 'John Doe' }
      ]
    },
    {
      profileUrl: './assets/imgs/user2.png',
      fullName: 'Samya Julie',
      video: './assets/imgs/post2.png'
    },
    {
      profileUrl: './assets/imgs/user3.png',
      fullName: 'Marrie Julie',
      replies: [
        { fullName: 'Marrie Doe' },
        { fullName: 'Smith Jam' },
        { fullName: 'John Doe' },
        { fullName: 'Marrie Doe' },
        { fullName: 'Smith Jam' },
        { fullName: 'John Doe' }
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
