import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routerConfig } from './app.routing';
import { RouterModule } from '@angular/router';


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
    SearchBarSoundsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
