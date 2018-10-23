import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  Fname:'';
  email:'';
  CheckInDate:'';
  CheckInTime:'';
  CheckOutDate:'';
  CheckOutTime:'';
  adults:'';
  children:'';
  room:'';

  page= [
    {name:'notification', page:'notification'},
    {name:'contact', page:'contact'}
  ];

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params =>{
      this.Fname = params['Fname'];
      this.email = params['email'];
      this.CheckInDate = params['CheckInDate'];
      this.CheckInTime = params['CheckInTime'];
      this.CheckOutDate = params['CheckOutDate'];
      this.CheckOutTime = params['CheckOutTime'];
      this.adults = params['adults'];
      this.children = params['children'];
      this.room = params['room'];

      console.log(this.Fname);
      console.log(this.email);
      console.log(this.CheckInDate);
      console.log(this.CheckInTime);
      console.log(this.CheckOutDate);
      console.log(this.CheckOutTime);
      console.log(this.adults);
      console.log(this.children);
      console.log(this.room);
    
      }
     
      ) 
  }

  contact(){

  }
  

}
