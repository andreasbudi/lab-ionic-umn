import { Component, OnInit } from '@angular/core';
import { UKM } from '../home/home.model';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  UKM_fetched: UKM[] = [];

  constructor(private homeService : HomeService) { }

  ngOnInit() {
    this.UKM_fetched = this.homeService.get_ukms();
    console.log(this.UKM_fetched);
  }

  ionViewWillEnter(){
    this.UKM_fetched = this.homeService.get_ukms();
  }

  onRemove(u_selected){
    this.homeService.remove_ukm(u_selected);
    this.UKM_fetched = this.homeService.get_ukms();
  }



}
