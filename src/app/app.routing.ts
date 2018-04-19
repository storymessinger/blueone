import { MyComponent } from './my/my.component';
import { MomentsComponent } from './moments/moments.component';
import { LandingComponent } from './landing/landing.component';
import { Routes, RouterModule } from "@angular/router";
import { RoomsNavComponent } from './rooms-nav/rooms-nav.component';
import { SoundsComponent } from './sounds/sounds.component';


export const routerConfig: Routes = [
    { 
        path: '', 
        redirectTo: 'landing',
        pathMatch: 'full'
    },
    {
        path: 'landing',
        component: LandingComponent
    },
    {
        path: 'rooms',
        component: RoomsNavComponent
    },
    {
        path: 'moments',
        component: MomentsComponent
    },
    {
        path: 'sounds',
        component: SoundsComponent
    },
    {
        path: 'my',
        component: MyComponent
    }


]