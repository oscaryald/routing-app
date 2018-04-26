import {Routes, RouterModule, CanDeactivate} from '@angular/router';

import {DashboardComponent} from './dashboard.component';
import {DashboardUsersComponent} from './dashboard-users/dashboard-users.component';
import {DashboardUsersDetailsComponent} from './dashboard-users/dashboard-users-details/dashboard-users-details.component';
import {DashboardUsersHomeComponent} from './dashboard-users/dashboard-users-home/dashboard-users-home.component';
import {AuthGuardService} from '../shared/guard/auth-guard.service';
import {CanDeactivateGuardService} from '../shared/guard/can-deactivate-guard.service';

export const dashboardRoutes: Routes = [
    {
        path: 'dashboard',
        children: [
            {
                path: '',
                canActivate: [AuthGuardService],
                component: DashboardComponent
            },
            {
                path: 'users',
                canActivateChild: [AuthGuardService],
                component: DashboardUsersComponent,
                children: [
                    {
                        path: '',
                        component: DashboardUsersHomeComponent
                    },
                    {
                        path: ':username',
                        canDeactivate: [CanDeactivateGuardService],
                        component: DashboardUsersDetailsComponent
                    }

                ]
            }
        ]
    }
]


export const dashboardRouting = RouterModule.forChild(dashboardRoutes)