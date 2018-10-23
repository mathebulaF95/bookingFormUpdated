import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

@Input() name;
@Input() page;

@Input() email;
@Input() CheckInDate;
@Input() CheckInTime;
@Input() Fname;
@Input() CheckOutDate;
@Input() CheckOutTime;
@Input() adults;
@Input() children;
@Input() room;


  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigator() {
    if(name ==='notification') {
      this.router.navigate(['booking/notification']);

    } else if (this.name ==='contact') {
     this.router.navigate(['booking/contact'], {queryParams: {Fname:this.Fname, email:this.email, CheckInDate:this.CheckInDate, CheckInTime:this.CheckInTime, CheckOutDate:this.CheckOutDate, CheckOutTime:this.CheckOutTime, adults:this.adults, children:this.children, room:this.room}});
    }
  }

}
