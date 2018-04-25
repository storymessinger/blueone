import { AngularFirestore } from 'angularfire2/firestore';
import { BackgroundService } from './services/background.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routerConfig } from './app.routing';
import { RouterModule } from '@angular/router';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressRouterModule } from '@ngx-progressbar/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RoomsNavComponent } from './rooms-nav/rooms-nav.component';
import { RoomsDetailComponent } from './rooms-detail/rooms-detail.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MomentsComponent } from './moments/moments.component';
import { MomentsDetailComponent } from './moments-detail/moments-detail.component';
import { SearchBarMomentsComponent } from './search-bar-moments/search-bar-moments.component';
import { SoundsComponent } from './sounds/sounds.component';
import { SearchBarSoundsComponent } from './search-bar-sounds/search-bar-sounds.component';
import { MyComponent } from './my/my.component';
import { DroneComponent } from './drone/drone.component';
import { MomentsRealComponent } from './moments-real/moments-real.component';

import {firebaseConfig} from "../environments/firebase.config";
import {AngularFireModule} from 'angularfire2';
import { MomentsListComponent } from './moments-list/moments-list.component';
import { SoundsDetailComponent } from './sounds-detail/sounds-detail.component';
import {MatButtonModule} from '@angular/material/button';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SearchBarComponent,
    RoomsNavComponent,
    RoomsDetailComponent,
    NavBarComponent,
    MomentsComponent,
    MomentsDetailComponent,
    SearchBarMomentsComponent,
    SoundsComponent,
    SearchBarSoundsComponent,
    MyComponent,
    DroneComponent,
    MomentsRealComponent,
    MomentsListComponent,
    SoundsDetailComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routerConfig),
    NgProgressModule.forRoot(),
    NgProgressRouterModule,
    AngularFireModule.initializeApp(firebaseConfig),
    HttpModule,
    MatButtonModule
  ],
  providers: [
    BackgroundService,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
