import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {appRouting} from './app.routing';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {AuthGuardService} from './shared/guard/auth-guard.service';
import {CanDeactivateGuardService} from './shared/guard/can-deactivate-guard.service';




@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ContactComponent,
        NotFoundComponent,

    ],
    imports: [
        BrowserModule,
        FormsModule,
        appRouting,
        DashboardModule,

    ],
    providers: [AuthGuardService, CanDeactivateGuardService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
