import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AboutUserComponent} from './about/about-user/about-user.component';


const appRoutes: Routes = [
    {
        path:"",
        component: HomeComponent
    },
    {
        path:"about",
        component: AboutComponent
    },
    {
        path:"about/:username",
        component: AboutUserComponent
    },
    {
        path:"contact",
        component: ContactComponent
    },
    {
        path:"**",
        component: NotFoundComponent
    }
]

export const appRouting = RouterModule.forRoot(appRoutes)