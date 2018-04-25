import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {appRouting} from './app.routing';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutUserComponent } from './about/about-user/about-user.component';
import {UsersService} from './shared/services/users.service';



@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ContactComponent,
        AboutComponent,
        NotFoundComponent,
        AboutUserComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        appRouting
    ],
    providers: [UsersService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
