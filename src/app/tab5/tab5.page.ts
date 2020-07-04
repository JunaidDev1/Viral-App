import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { DataCollectorService } from '../data-collector.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  activeTab = 'charts';
  dummyItems: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  showFooter:any=false;
  audio:any;

  musicList: Array<any> = [
    './assets/imgs/music2.png', './assets/imgs/music3.png', './assets/imgs/music4.png', './assets/imgs/music5.png',
  ];
  allMusics:any=[];


  playList: Array<any> = [
    { img: './assets/imgs/post1.png', title: 'Most Played' },
    { img: './assets/imgs/post2.png', title: 'Recently Played' },
    { img: './assets/imgs/post3.png', title: 'Newly Added' },
    { img: './assets/imgs/story1.png', title: 'Favourite' },
    { img: './assets/imgs/story2.png', title: 'Workout' },
    { img: './assets/imgs/post1.png', title: 'Most Played' },
    { img: './assets/imgs/post2.png', title: 'Recently Played' },
    { img: './assets/imgs/post3.png', title: 'Newly Added' },
    { img: './assets/imgs/story1.png', title: 'Favourite' },
    { img: './assets/imgs/story2.png', title: 'Workout' },
  ];

  constructor(public service:DataCollectorService) {
    this.getAllMusics();
   }

  ngOnInit() {
  }

  getAllMusics(){
    firebase.database().ref('musics').once('value',(snapshot)=>{
      var musics=snapshot.val();
      for(var key in musics){
        var music=musics[key];
        music.key=key;
        music.img=this.musicList[0];
        this.allMusics.push(music);
      }
      
    })
  }

  playAudio(music){
   
    this.showFooter=true;
    this.allMusics.forEach((item)=>{
      if(item.played){
        item.played=false;
        this.audio.pause();
      }
    })
    this.audio = new Audio(music.musicUrl);
    debugger;
    music.played=true;
    this.service.currentMusic=music;
    this.audio.play();

  }
  pauseAudio(music){
    this.showFooter=true;
    music.played=false;
    this.service.currentMusic=music;
    this.audio.pause();
  }

  seek(event){
    console.log(this.audio);
  }



}
