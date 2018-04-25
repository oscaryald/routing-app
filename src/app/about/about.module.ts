import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutComponent} from './about.component';
import {AboutUserComponent} from './about-user/about-user.component';
import {UsersService} from '../shared/services/users.service';
import {aboutRoutes} from './about.routing';
import { AboutSectionComponent } from './about-section/about-section.component';

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
        UsersService
    ]
})
export class AboutModule {
}
