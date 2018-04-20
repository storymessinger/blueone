import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import {Http} from "@angular/http";
import * as firebase from 'firebase/app';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

interface IMG {
  bigUrl: string;
  date : string;
  $key : string;
}


@Component({
  selector: 'app-moments-real',
  templateUrl: './moments-real.component.html',
  styleUrls: ['./moments-real.component.scss']
})
export class MomentsRealComponent implements OnInit {

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

  }

  getPhotoList() {
    this.photoDoc = this.afs.collection<any>('users/GGQZzOrT7PWhAU8wV4wFXrKUZ3E3/photos', ref => ref.orderBy('date', 'desc')
      .limit(20));
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




}
