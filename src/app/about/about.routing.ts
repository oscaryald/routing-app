import {RouterModule, Routes} from '@angular/router';

import {AboutUserComponent} from './about-user/about-user.component';
import {AboutComponent} from './about.component';
import {AboutSectionComponent} from './about-section/about-section.component';
import {AboutResolveService} from './about-resolve.service';
import {AboutUserResolveService} from './about-user-resolve.service';

const aboutRoute: Routes = [
    {
        path: "",
        component: AboutSectionComponent,
        children: [
            {
                path: "",
                component: AboutComponent,
                resolve: {
                    users: AboutResolveService
                }
            },
            {
                path: ":username",
                component: AboutUserComponent,
                resolve: {
                    user: AboutUserResolveService
                }
            },
        ]
    }

]

export const aboutRoutes = RouterModule.forChild(aboutRoute)
