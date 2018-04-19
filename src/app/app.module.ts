import { BackgroundService } from './services/background.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routerConfig } from './app.routing';
import { RouterModule } from '@angular/router';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressRouterModule } from '@ngx-progressbar/router';


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
    DroneComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routerConfig),
    NgProgressModule.forRoot(),
    NgProgressRouterModule
  ],
  providers: [BackgroundService],
  bootstrap: [AppComponent]
})
export class AppModule { }
