import {RouterModule, Routes} from '@angular/router';

import {AboutUserComponent} from './about-user/about-user.component';
import {AboutComponent} from './about.component';
import {AboutSectionComponent} from './about-section/about-section.component';

const aboutRoute: Routes = [
    {
        path: "",
        component: AboutSectionComponent,
        children: [
            {
                path: "",
                component: AboutComponent
            },
            {
                path: ":username",
                component: AboutUserComponent
            },
        ]
    }

]

export const aboutRoutes = RouterModule.forChild(aboutRoute)
