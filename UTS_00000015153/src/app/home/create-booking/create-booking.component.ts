import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { UKM } from '../home.model';
import { MybookingServiceService } from 'src/app/my-booking/mybooking-service.service';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  all_venue : UKM[];
  constructor(private mybookingServiceService: MybookingServiceService) { }

  ngOnInit() {
  }

  tambah_venue(data:UKM){
    this.mybookingServiceService.my_booking(data);

  }
  
}
