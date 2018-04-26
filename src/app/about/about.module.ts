import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutComponent} from './about.component';
import {AboutUserComponent} from './about-user/about-user.component';
import {UsersService} from '../shared/services/users.service';
import {aboutRoutes} from './about.routing';
import { AboutSectionComponent } from './about-section/about-section.component';
import {AboutResolveService} from './about-resolve.service';
import {AboutUserResolveService} from './about-user-resolve.service';

@NgModule({
    imports: [
        CommonModule,
        aboutRoutes
    ],
    declarations: [
        AboutComponent,
        AboutUserComponent,
        AboutSectionComponent,
    ],
    providers: [
        UsersService,
        AboutResolveService,
        AboutUserResolveService
    ]
})
export class AboutModule {
}
