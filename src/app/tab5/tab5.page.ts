import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as firebase from 'firebase';
import { DataCollectorService } from '../data-collector.service';
import { IonRange } from '@ionic/angular';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  activeTab = 'charts';
  dummyItems: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  showFooter: any = false;
  @ViewChild('player') player: ElementRef;
  @ViewChild('range') range: IonRange;
  musicList: Array<any> = [
    './assets/imgs/music2.png', './assets/imgs/music3.png', './assets/imgs/music4.png', './assets/imgs/music5.png',
  ];
  allMusics: any = [];

  currentTime: any = 0;
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
  currentIndex: any = 0;
  duration: any;
  progress: any;
  totalTime: any;


  constructor(public service: DataCollectorService) {
    this.getAllMusics();
  }

  ngOnInit() {
  }

  getAllMusics() {
    firebase.database().ref('musics').once('value', (snapshot) => {
      var musics = snapshot.val();
      for (var key in musics) {
        var music = musics[key];
        music.key = key;
        music.img = this.musicList[0];
        this.allMusics.push(music);
      }

    })
  }



  show(music) {
    this.showFooter = true;
    this.service.currentMusic = music;

    //  let duration = this.audio.duration;
    // this.duration=this.secondsToHms(duration);
    // this.audio.addEventListener('loadeddata', () => {
    //   let duration = this.audio.duration;
    //   this.duration=this.secondsToHms(duration);
    //   console.log(duration);
    //   // The duration variable now holds the duration (in seconds) of the audio clip 
    // })
  }

  playAudio(music) {
    music.played = true;
    this.player.nativeElement.play();
    let duration = this.player.nativeElement.duration;
    this.totalTime = duration;
    this.duration = this.secondsToHms(duration);

    this.updateProgress();
  }



  secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " : " : " :") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " : " : " : ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " " : " ") : "";
    return hDisplay + mDisplay + sDisplay;
  }
  pauseAudio(music) {
    console.log(this.player);
    this.player.nativeElement.pause();
    this.showFooter = true;
    music.played = false;
    this.service.currentMusic = music;
  }


 

  seek() {
    debugger;
    this.player.nativeElement.currentTime=this.range.value;
  }

  next() {
    debugger;
    console.log(this.player);
    this.player.nativeElement.currentTime=0;
    this.currentTime=0;
    this.player.nativeElement.pause();
    this.allMusics[this.currentIndex].played = false;
    this.currentIndex = this.currentIndex + 1;

    if (this.currentIndex >= this.allMusics.length - 1) {
      this.currentIndex = 0;
    }
  
    this.player.nativeElement.src = this.allMusics[this.currentIndex].musicUrl;
    let duration = this.player.nativeElement.duration;
    this.totalTime = duration;
    this.duration = this.secondsToHms(duration);
    this.allMusics[this.currentIndex].played = true;
    this.service.currentMusic = this.allMusics[this.currentIndex];
    this.player.nativeElement.play();
    console.log(this.player);
    debugger;
    
    this.updateProgress();


  }
  prev() {
    this.player.nativeElement.currentTime=0;
    this.currentTime=0;
    this.player.nativeElement.pause();
    this.allMusics[this.currentIndex].played = false;
    this.currentIndex = this.currentIndex - 1;
    if (this.currentIndex <= 0) {
      this.currentIndex = this.allMusics.length - 1;
    }
    this.player.nativeElement.src = this.allMusics[this.currentIndex].musicUrl;
    let duration = this.player.nativeElement.duration;
    this.totalTime = duration;
    this.duration = this.secondsToHms(duration);
    this.allMusics[this.currentIndex].played = true;
    this.service.currentMusic = this.allMusics[this.currentIndex];
    this.player.nativeElement.play();

    
    this.updateProgress();

  }

  updateProgress() {
    this.currentTime = this.player.nativeElement.currentTime;
    setTimeout(() => {
      this.updateProgress();
    }, 100)

  }



}
