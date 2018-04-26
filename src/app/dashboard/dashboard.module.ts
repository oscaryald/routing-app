import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import { DashboardUsersComponent } from './dashboard-users/dashboard-users.component';
import { DashboardUsersHomeComponent } from './dashboard-users/dashboard-users-home/dashboard-users-home.component';
import { DashboardUsersDetailsComponent } from './dashboard-users/dashboard-users-details/dashboard-users-details.component';
import {dashboardRouting} from './dashboard.routing';
import {UsersService} from '../shared/services/users.service';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        dashboardRouting,
        FormsModule
    ],
    declarations: [
        DashboardComponent,
        DashboardUsersComponent,
        DashboardUsersHomeComponent,
        DashboardUsersDetailsComponent
    ],
    providers: [
        UsersService
    ]
})
export class DashboardModule {
}
