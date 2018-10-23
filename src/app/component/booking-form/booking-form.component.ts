import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {

  Fname:'';
  email:'';
  CheckInDate:'';
  CheckInTime:'';
  CheckOutDate:'';
  CheckOutTime:'';
  adults:'';
  children:'';
  room:'';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  bookingForm(){
    console.log(this.Fname);
    console.log(this.email);
    console.log(this.CheckInDate);
    console.log(this.CheckInTime);
    console.log(this.CheckOutDate);
    console.log(this.CheckOutTime);
    console.log(this.adults);
    console.log(this.children);
    console.log(this.room);
  
    this.router.navigate (['booking'], {queryParams: {Fname: this.Fname, email: this.email, CheckInDate: this.CheckInDate, CheckInTime: this.CheckInTime, CheckOutDate: this.CheckOutDate, CheckOutTime: this.CheckOutTime, adults: this.adults, children: this.children, room: this.room  }});

  }

}

