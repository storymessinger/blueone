import { Component, OnInit } from '@angular/core';
import 'slick-carousel';
import * as $ from 'jquery';

@Component({
  selector: 'app-sounds',
  templateUrl: './sounds.component.html',
  styleUrls: ['./sounds.component.scss']
})
export class SoundsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".slick-container").slick({
      autoplay: false,
      dots: true,
      speed: 300,
      infinite: true,
      autoplaySpeed: 3000,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 2,
      fade: true,
      centerMode: true,
      centerPadding: '0px',
      touchMove: true,
      prevArrow: '<button style="border:none; outline:none; padding:0; display:block; transform:unset; -webkit-transform:unset; position: fixed; height: 220px;width: 150px;top: 0px;left: 0;background: transparent;color: transparent;z-index: 1000;" type="button" class="">Previous</button>',
      nextArrow: '<button style="border:none; outline:none; padding:0; display:block; transform:unset; -webkit-transform:unset; position: fixed; height: 220px;width: 150px;top: 0px;right: 0;background: transparent;color: transparent;z-index: 1000;" type="button" class="">Next</button>',
      appendDots: $('.dots')
    
    })

  }

}
