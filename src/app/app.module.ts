import { AppRoutes} from './../app.routes.modules'

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { ContactComponent } from './component/contact/contact.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { BookingComponent } from './component/booking/booking.component';
import { NotificationComponent } from './component/notification/notification.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { LocationComponent } from './component/location/location.component';
import { CostComponent } from './component/cost/cost.component';
import { RoomsComponent } from './component/rooms/rooms.component';
import { BookingFormComponent } from './component/booking-form/booking-form.component';

//import { AppRoutes } from '../app.routes.module';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContactComponent,
    NavBarComponent,
    BookingComponent,
    NotificationComponent,
    HomeComponent,
    AboutComponent,
    LocationComponent,
    CostComponent,
    RoomsComponent,
    BookingFormComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
