import { Component, OnInit } from '@angular/core';
import { UKM } from './home.model';
import { HomeService } from './home.service';
import { ModalController, AlertController, LoadingController, ToastController } from '@ionic/angular';
import { ThrowStmt } from '@angular/compiler';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { MybookingServiceService } from '../my-booking/mybooking-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  list_ukm: UKM[];

  constructor(
    private homeService: HomeService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private mybookingService: MybookingServiceService,
    public toastController: ToastController) { }

  ngOnInit() {
    this.list_ukm = this.homeService.getAll_ukm();
    
  }

  async presentToast() {


  }

 async booking(id){
    //this.homeService.booking(id);
      //this.temp_ukm.push(id_sementara);
    // this.isLoading = true;
    const toast = await this.toastController.create({
      message: 'Congratulations, your booking has been successfully made.',
      duration: 2000
    }); 
    const alert = await this.alertCtrl.create({
      header: 'Book Venue',
      subHeader:'Are you sure you want to book the venue?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.mybookingService.my_booking(id);
            
         
            this.alertCtrl.dismiss({ message: 'booked!' }, 'confirm');
            toast.present();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

  
    await alert.present();
    

    
  
}



dismissModal() {
  this.modalCtrl.dismiss(null, 'cancel');
}



  }
