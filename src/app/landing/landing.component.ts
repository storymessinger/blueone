import { BackgroundService } from './../services/background.service';
import { Component, OnInit } from '@angular/core';
declare var TweenLite, Power2:any;
declare var p5, TimelineMax, TweenMax, Power4;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private backgroundService:BackgroundService) { 

  }

  ngOnInit() {
    this.backgroundService.backgroundCanvas('animate','#2D1BA4',1, '#FFFFFF', '#FFFFFF', 10);
  }

}
