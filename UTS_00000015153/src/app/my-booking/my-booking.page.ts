import { Component, OnInit } from '@angular/core';
import { UKM } from '../home/home.model';
import { MybookingServiceService } from './mybooking-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.page.html',
  styleUrls: ['./my-booking.page.scss'],
})
export class MyBookingPage implements OnInit {

  constructor(private myBookingService: MybookingServiceService,
    private router: Router) { }

  simpanan_venue : UKM[]; 

  ngOnInit() {
    this.simpanan_venue = this.myBookingService.getAllSimpanan();
  }

  ionViewWillEnter() {
    this.simpanan_venue = this.myBookingService.getAllSimpanan();
  }

  delete_venue(v:UKM) {
    this.myBookingService.delete_venue(v);
    this.simpanan_venue = this.myBookingService.getAllSimpanan();
    this.router.navigateByUrl('/home')
  }

}
