import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import {Http} from "@angular/http";
import * as firebase from 'firebase/app';

import { TweenLite, TweenMax } from 'gsap';
import ScrollToPlugin from "gsap/ScrollToPlugin";
declare var TweenLite, TweenMax, Power3, Elastic:any;

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

interface IMG {
  bigUrl: string;
  date : string;
  $key : string;
}


@Component({
  selector: 'app-moments-list',
  templateUrl: './moments-list.component.html',
  styleUrls: ['./moments-list.component.scss']
})
export class MomentsListComponent implements OnInit {

  photoDoc: AngularFirestoreCollection<any>;
  photo$: Observable<any>;
  listofPhotos:IMG[] = [];
  selectedPhoto:IMG = {
    bigUrl: '',
    date: '',
    $key: ''
  };

  private basePath:string = '/photos';

  constructor(private afs: AngularFirestore, private http:Http) { }

  ngOnInit() { 

    this.getPhotoList();

    this.photo$.subscribe(val => {
      this.listofPhotos = val;
      console.log('list of images: ', val)
      this.selectedPhoto = val[0];
    });

    TweenMax.from('.circle', 1, {ease: Elastic.easeOut.config(1, 0.5), width: "10px", height: "10px"});
  }

  getPhotoList() {
    this.photoDoc = this.afs.collection<any>('users/GGQZzOrT7PWhAU8wV4wFXrKUZ3E3/photos', ref => ref.orderBy('date', 'desc')
      .limit(21));
    this.photo$ = this.photoDoc
      .snapshotChanges()
      .map(actions => {
        return actions.map(item => {
        return ({ $key: item.payload.doc.id, ...item.payload.doc.data() })
      });
    })
  }

  selectImg(target) {
    console.log('select');
    this.selectedPhoto = this.listofPhotos.find(img => img.bigUrl == target.src);
    console.log('selected Image: ', this.selectedPhoto);
    let key = this.selectedPhoto.$key;
    let num = this.listofPhotos.findIndex(item => item.$key == key);
    let arr = this.listofPhotos.slice(num-2, num+3);
    console.log(arr);
    this.scrollToTop();
  }

  delete(){
    console.log('delete');

    //Delete firebase stroage
    let storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${this.selectedPhoto.date}.jpg`).delete()
    
    //Delete firestore
    this.afs.doc(`users/GGQZzOrT7PWhAU8wV4wFXrKUZ3E3/photos/${this.selectedPhoto.$key}`).delete();
    //Get updated list of firestore
    this.getPhotoList();

  }

  public scrollToTop() {
    // can you tell me why 'document.body.scrollTop' is always equals to 0
    // in Chrome ???
    if(document.body.scrollTop !== 0) {
        TweenLite.to(document.body, 0.6, {ease: Power3.easeOut, scrollTop: 0});
    }
    else {
        TweenLite.to(document.documentElement, 0.6, {ease: Power3.easeOut, scrollTop: 0});
    }
}

}
