import { Component, OnInit } from '@angular/core';
import 'slick-carousel';
import * as $ from 'jquery';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss']
})
export class MyComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(".slick-container").slick({
      autoplay: false,
      speed: 300,
      infinite: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 2,
      fade: true,
      centerMode: true,
      centerPadding: '0px',
      swipeToSlide: true,
      // arrows: true,
      // prevArrow: '<button style="border:none; outline:none; padding:0; display:block; transform:unset; -webkit-transform:unset; position: fixed; height: 220px;width: 150px;top: 0px;left: 0;background: transparent;color: transparent;z-index: 1000;" type="button" class="">Previous</button>',
      // nextArrow: '<button style="border:none; outline:none; padding:0; display:block; transform:unset; -webkit-transform:unset; position: fixed; height: 220px;width: 150px;top: 0px;right: 0;background: transparent;color: transparent;z-index: 1000;" type="button" class="">Next</button>',
      // dots: true,
      // appendDots: $('.dots')
    
    })
  }

}
