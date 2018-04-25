import { Component, OnInit } from '@angular/core';

import { TweenLite, TweenMax, TimelineLite } from 'gsap';
import ScrollToPlugin from "gsap/ScrollToPlugin";
declare var TimelineLite, TweenLite, TweenMax, Power3, Elastic:any;

@Component({
  selector: 'app-rooms-nav',
  templateUrl: './rooms-nav.component.html',
  styleUrls: ['./rooms-nav.component.scss']
})
export class RoomsNavComponent implements OnInit {

  constructor() { }

    defaultImage="http://via.placeholder.com/288x170" 
    image="./../../assets/2x/room01.png" 
    offset="100"

  ngOnInit() {
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
