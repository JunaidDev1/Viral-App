import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataCollectorService } from '../data-collector.service';
import { UtilsService } from '../utils.service';
import * as firebase from 'firebase';

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
  uid:any;
  myUid:any;
  
  constructor(public route:ActivatedRoute, public service:DataCollectorService, public utils:UtilsService, public router:Router) { 
    this.myUid=localStorage.getItem('uid');
    this.route.params.subscribe((params) => {
      this.uid = params['id'];
      this.service.getUser(this.uid);
    })
  }

  toFollow() {
    this.service.getUser(localStorage.getItem('uid'));
    this.service.getUser(this.uid);
    var followers = [];
    debugger;
    if (this.service.usersData[this.uid].followers) {
      followers = this.service.usersData[this.uid].followers;
    }
    followers.push(localStorage.getItem('uid'));
    var updates = {};
    updates['users/' + this.uid + '/followers'] = followers;
    firebase.database().ref().update(updates).then(() => {
      this.utils.createToast("Follower Added!");
    })
  }
  
  toUnFollow() {

    this.service.getUser(localStorage.getItem('uid'));
    this.service.getUser(this.uid);
    var followers = [];
    var follwings = [];
    debugger;
    if (this.service.usersData[this.uid].followers) {
      followers = this.service.usersData[this.uid].followers;
    }
    const findex = followers.indexOf(localStorage.getItem('uid'));
    if (findex > -1) {
      followers.splice(findex, 1);
    }
    debugger;
    var updates = {};
    updates['users/' + this.uid + '/followers'] = followers;
    firebase.database().ref().update(updates).then(() => {
      this.utils.createToast("Remove From Followers!");
    })
  }

  ngOnInit() {
  }

  toChatScreen(){
    this.router.navigate(['/chat-screen/'+this.uid]);
  }

}
