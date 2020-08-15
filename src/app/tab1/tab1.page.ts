import { Component, OnInit, NgZone, ViewChildren, QueryList } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UtilsService } from '../utils.service';
import * as firebase from 'firebase';
import { DataCollectorService } from '../data-collector.service';
import * as moment from 'moment';
import { Crop } from '@ionic-native/crop/ngx';
import { ModalController } from '@ionic/angular';
import { ImageViewerPage } from '../image-viewer/image-viewer.page';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  @ViewChildren('player') videoPlayers: QueryList<any>;
  activeTab = 'feed';
  createPost: boolean;
  slideOpts = {
    autoplay: true,
    speed: 400,
  };
  rotation = 0;
  postMessage: any;
  uid: any;
  allPosts: any = [];
  currentPlayingVideo: HTMLVideoElement;
  postImgUrl: any = [];
  postImgObj: any = [];
  postImages: any = [];
  postVideoObj: any = [];
  postVideoUrl: any = [];
  postVideos: any = [];
  currentPlaying: HTMLVideoElement = null;
  
  constructor(
    public router: Router,
    public actionSheetCtrl: ActionSheetController,
    public utils: UtilsService,
    public zone: NgZone,
    public service: DataCollectorService,
    private crop: Crop,
    public modalController:ModalController
  ) {
    this.uid = localStorage.getItem('uid');
    this.getAllPosts();
  }

  didScroll(eb) {
    if (this.currentPlaying && this.isElementInViewPort(this.currentPlaying)) {
      return;
    }
    else if (this.currentPlaying && !this.isElementInViewPort(this.currentPlaying)) {
      this.currentPlaying.pause();
      this.currentPlaying = null;
    }
    else {

      this.videoPlayers.forEach(player => {
        if (this.currentPlaying) {
          return;
        }
        var nativeElement = player.nativeElement;
        const inView = this.isElementInViewPort(nativeElement);
       
        if (inView) {
          this.currentPlaying = nativeElement;
          this.currentPlaying.muted = true;
          this.currentPlaying.play();
        }
      })

    }

  }

  isElementInViewPort(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 && rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) &&
      rect.right >= (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth)
    );


  }




  ngOnInit() {
    setInterval(() => {
      this.rotateMusicIcon();
    }, 30);
  }


  rotateMusicIcon() {
    this.rotation++;
    if (this.rotation === 360) {
      this.rotation = 0;
    }
  }
  closeModal(e: any) {
    if (e.target.id === 'mainContainer') {
      this.createPost = false;
    }
  }

  toGalleryMedia() {
    var el = document.getElementById('galleryMedia');
    el.click();
  }

  onChangeFileGallery(event: EventTarget) {
    console.log(event);
    let eventObj: MSInputMethodContext = <MSInputMethodContext>event;
    let target: HTMLInputElement = <HTMLInputElement>eventObj.target;
    let files: FileList = target.files;
    var self = this;
    for (var a = 0; a < files.length; a++) {
      if (files[a].type == 'image/png' || files[a].type == 'image/jpeg') {
        this.postImgObj.push(files[a]);
        (function (file) {
          var imageReader = new FileReader();
          imageReader.onload = (file) => {
            self.postImgUrl.push(imageReader.result);
          }
          imageReader.readAsDataURL(file)
        })(files[a]);
      }
      else {
        this.postVideoObj.push(files[a]);
        (function (file) {
          var videoReader = new FileReader();
          videoReader.onload = (file) => {
            self.postVideoUrl.push(videoReader.result);
          }
          videoReader.readAsDataURL(file)
        })(files[a]);
      }
    }
  }


  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [{
        text: 'Add to story',
        handler: () => {

        }
      }, {
        text: 'Forward to friend',
        handler: () => {

        }
      }, {
        text: 'Unfollow',
        handler: () => {

        }
      }, {
        text: 'Block',
        handler: () => {

        }
      }, {
        text: 'Report',
        handler: () => {

        }
      }, {
        text: 'Turn on post notifications',
        handler: () => {

        }
      }]
    });
    await actionSheet.present();
  }

  async  viewImage(img) {
    const modal = await this.modalController.create({
      component: ImageViewerPage,
      componentProps: {
        image: img
      }
    });
    await modal.present();
  }

  savePost() {
    this.utils.presentLoading();
    if (this.postImgUrl.length) {
      this.galleryMedia();
    }
    else if (this.postVideoUrl.length) {
      this.galleryVideo();
    }
    else {
      this.createFirebasePost();
    }
  }

  galleryMedia() {
    var self = this;
    this.zone.run(() => {
      for (var i = 0; i < self.postImgUrl.length; i++) {
        let storageRef = firebase.storage().ref();
        const filename = Math.floor(Date.now() / 1000);
        const imageRef = storageRef.child(`profileImages/${filename}.jpg`);

        imageRef.putString(self.postImgUrl[i], firebase.storage.StringFormat.DATA_URL).then((snapshot) => {
          firebase.storage().ref('profileImages/' + snapshot.metadata.name).getDownloadURL().then((url) => {
            self.postImages.push(url);
            var j = 0;

            if (j == self.postImgObj.length - 1) {
              if (self.postVideoUrl.length) {
                this.galleryVideo();
              }
              else {
                self.createFirebasePost();
              }

            }
            else {
              j++;
            }
          })
            .catch((e) => {
              this.utils.stopLoading();
              alert(e.message);
            })
        })
      }

    })

  }

  toComments(i){
     this.service.postComments=this.allPosts[i].comments;
    this.service.postKey=this.allPosts[i].key;
    this.router.navigate(['/post-comments']);
  }

  galleryVideo() {
    var self = this;
    this.zone.run(() => {
      for (var i = 0; i < self.postVideoUrl.length; i++) {
        let storageRef = firebase.storage().ref();
        const filename = Math.floor(Date.now() / 1000);
        const imageRef = storageRef.child(`profileImages/${filename}.mp4`);

        imageRef.putString(self.postVideoUrl[i], firebase.storage.StringFormat.DATA_URL).then((snapshot) => {
          firebase.storage().ref('profileImages/' + snapshot.metadata.name).getDownloadURL().then((url) => {
            self.postVideos.push(url);
            var j = 0;
            if (j == self.postVideoObj.length - 1) {
              self.createFirebasePost();
            }
            else {
              j++;
            }
          })
            .catch((e) => {
              this.utils.stopLoading();
              alert(e.message);
            })
        })
      }

    })

  }

  createFirebasePost() {
    if (!this.postMessage || !this.postImages || !this.postVideos) {
      this.utils.stopLoading();
      return alert("Add text or image!")
    }
    var postData: any = {
      uid: this.uid,
      postMessage: this.postMessage || '',
      timestamp: Number(new Date())
    }
    if (this.postImages.length) {
      postData.postImages = this.postImages;
    }
    if (this.postVideos.length) {
      postData.postVideos = this.postVideos;
    }
    firebase.database().ref('posts/').push(postData).key;
    this.createPost = false;
  
    this.allPosts.unshift(postData);
    this.utils.stopLoading();
    this.postImages = [];
    this.postImgUrl = [];
    this.postMessage = "";
    this.utils.createToast("Post Added!");

  }

  getAllPosts() {
    this.allPosts = [];
    firebase.database().ref('posts').once('value', (snapshot) => {
      var posts = snapshot.val();
      for (var key in posts) {
        var post = posts[key];
        post.key = key;
        post.postTimestamp = moment(post.timestamp).fromNow();
        this.service.getUser(post.uid);
        this.allPosts.push(post);
      }
      this.allPosts.reverse();
    })
  }

  doRefresh(event) {
    this.getAllPosts();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  toLike(post) {
    var updates = {};
    if (!post.likes) {
      post.likes = [];
    }

    if (post.likes.includes(localStorage.getItem('uid'))) {
      const index = post.likes.indexOf(localStorage.getItem('uid'));
      if (index > -1) {
        post.likes.splice(index, 1);
      }
    }
    else {
      if (post.dislikes) {
        if (post.dislikes.includes(localStorage.getItem('uid'))) {
          const index = post.dislikes.indexOf(localStorage.getItem('uid'));
          if (index > -1) {
            post.dislikes.splice(index, 1);
          }
        }
      }
      post.likes.push(localStorage.getItem('uid'));
    }
    if (post.dislikes) {
      updates['posts/' + post.key + '/dislikes/'] = post.dislikes;
    }

    updates['posts/' + post.key + '/likes/'] = post.likes;
    firebase.database().ref().update(updates).then(() => {

    })



  }


  toDislike(post) {
    var updates = {};
    if (!post.dislikes) {
      post.dislikes = [];
    }

    if (post.dislikes.includes(localStorage.getItem('uid'))) {
      const index = post.dislikes.indexOf(localStorage.getItem('uid'));
      if (index > -1) {
        post.dislikes.splice(index, 1);
      }
    }
    else {
      if (post.likes) {
        if (post.likes.includes(localStorage.getItem('uid'))) {
          const index = post.likes.indexOf(localStorage.getItem('uid'));
          if (index > -1) {
            post.likes.splice(index, 1);
          }
        }
      }
      post.dislikes.push(localStorage.getItem('uid'));
    }
    updates['posts/' + post.key + '/dislikes/'] = post.dislikes;
    if (post.likes) {
      updates['posts/' + post.key + '/likes/'] = post.likes;
    }

    firebase.database().ref().update(updates).then(() => {

    })



  }

  onPlayingVideo(event) {
    event.preventDefault();
    // play the first video that is chosen by the user
    if (this.currentPlayingVideo === undefined) {
      this.currentPlayingVideo = event.target;
      this.currentPlayingVideo.play();
    } else {
      // if the user plays a new video, pause the last one and play the new one
      if (event.target !== this.currentPlayingVideo) {
        this.currentPlayingVideo.pause();
        this.currentPlayingVideo = event.target;
        this.currentPlayingVideo.play();
      }
    }
  }



  othersProfile(uid) {
    if (uid == localStorage.getItem('uid')) {
      this.router.navigate(['/profile'])
    }
    else {
      this.router.navigate(['/others-profile/' + uid]);

    }

  }



}
