import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavParams, NavController, Platform, ModalController } from '@ionic/angular';
import { IonSlides} from '@ionic/angular';
@Component({
  selector: 'app-view-story',
  templateUrl: './view-story.page.html',
  styleUrls: ['./view-story.page.scss'],
})
export class ViewStoryPage implements OnInit {
 
  private stories = new Array<any>();
  private tapped: any;
  private userId: number = 1;
  private isPaused: boolean = false;
  private video: any;
  private isWaiting: boolean = false;
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
  width: number = 0;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalController: ModalController,
    private platform: Platform) {
    this.changeProgressbar();
    this.stories = this.navParams.get("stories");
    this.tapped = this.navParams.get("tapped");
  }

  ngOnInit() {
  }

  changeProgressbar(){
    var self=this;
    var interval = setInterval(function() {
      self.width += 0.1;
      if (self.width >= 1) {
          clearInterval(interval);
      }
  }, 500);
  }




  closeModal(e: any) {
    if (e.target.id === 'mainContainer') {
      this.showViewers = false;
    }
  }

  

  closeStoryViewer() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }


  

}
