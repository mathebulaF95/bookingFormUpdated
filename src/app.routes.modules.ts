import { ContactComponent } from "./app/component/contact/contact.component";
import { HomepageComponent } from "./app/component/homepage/homepage.component";
import { BookingComponent } from "./app/component/booking/booking.component";
import { NotificationComponent } from "./app/component/notification/notification.component";
import { AboutComponent } from "./app/component/about/about.component";
import { RoomsComponent } from "./app/component/rooms/rooms.component";
import { LocationComponent } from "./app/component/location/location.component";
import { CostComponent } from "./app/component/cost/cost.component";
import { BookingFormComponent } from "./app/component/booking-form/booking-form.component";



export const AppRoutes = [
    {path:'', component: HomepageComponent},
    {path: 'booking', component: BookingComponent, children: [
       // {path: 'contact', component: ContactComponent},
        //{path: 'about', component: AboutComponent},
       // {path: 'notification', component: NotificationComponent},
        //{path: 'homepage', component: HomepageComponent}
            
    
    ]},
    {path: 'contact', component: ContactComponent},
    {path: 'about', component: AboutComponent},
    {path: 'notification', component: NotificationComponent},
    {path: 'homepage', component: HomepageComponent},
    {path: 'rooms', component: RoomsComponent},
    {path: 'location', component: LocationComponent},
    {path: 'cost', component: CostComponent},
    {path: 'booking-form', component: BookingFormComponent}
        
    
        
    
];
