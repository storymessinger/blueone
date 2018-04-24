import { TimelineLite } from 'gsap';
import { Component, OnInit } from '@angular/core';
import 'slick-carousel';
import * as $ from 'jquery';
import { Router } from '@angular/router';
declare var TimelineLite;

@Component({
  selector: 'app-sounds-detail',
  templateUrl: './sounds-detail.component.html',
  styleUrls: ['./sounds-detail.component.scss']
})
export class SoundsDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.slider-nav',
      centerMode: true,
      focusOnSelect: true,
      dots: false,
      swipeToSlide: true
    });
    $('.slider-nav').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      swipe: false,
      cssEase: 'ease-in-out'
    });
    $('.slider-for').on('swipe', function(event, slick, direction){
      console.log(direction);
      tl.play();
      // left
    });
  }

}

var tl = new TimelineLite();
tl.to('h1', 2, {color: 'white'});

