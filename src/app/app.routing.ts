import { MainComponent } from './main/main.component';
import { DroneComponent } from './drone/drone.component';
import { MomentsListComponent } from './moments-list/moments-list.component';
import { MomentsRealComponent } from './moments-real/moments-real.component';
import { MyComponent } from './my/my.component';
import { MomentsComponent } from './moments/moments.component';
import { LandingComponent } from './landing/landing.component';
import { Routes, RouterModule } from "@angular/router";
import { RoomsNavComponent } from './rooms-nav/rooms-nav.component';
import { SoundsComponent } from './sounds/sounds.component';
import { SoundsDetailComponent } from './sounds-detail/sounds-detail.component';


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
        path: 'main',
        component: MainComponent,
        children: [{
            path: 'rooms',
            component: RoomsNavComponent
        },{
            path: 'moments',
            component: MomentsListComponent
        },
        {
            path: 'sounds',
            component: SoundsComponent
        },
        {
            path: 'my',
            component: MyComponent
        },
        {
            path: 'drone',
            component: DroneComponent
        },
        {
            path: 'sounds_detail',
            component: SoundsDetailComponent
        }
    ]
    }

]