import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import { AlertController, ModalController } from '@ionic/angular';
import { UKM } from '../home/home.model';

@Component({
  selector: 'app-ukm-detail',
  templateUrl: './ukm-detail.page.html',
  styleUrls: ['./ukm-detail.page.scss'],
})
export class UkmDetailPage implements OnInit {

  UKM_fetched: UKM[];
  
  constructor(private homeService: HomeService,private modalCtrl: ModalController,   
    private alertController: AlertController,) { }

    ngOnInit() {
      this.UKM_fetched = this.homeService.get_detail_ukm();
      }

  async gabung(id) {
    const alert = await this.alertController.create({
      header: '',
      message: 'Beneran mau join?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancel sukses');
          }
        }, {
          text: 'Serius',
          handler: () => {
            this.add_ukm(id);
            console.log('Join sukses');
          }
        }
      ]
    });

    await alert.present();
  }

add_ukm(id){
  this.homeService.tambah_ukm(id);
}

}
