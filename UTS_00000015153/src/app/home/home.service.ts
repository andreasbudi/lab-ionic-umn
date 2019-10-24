import { Injectable } from '@angular/core';
import {UKM} from './home.model';



@Injectable({
  providedIn: 'root'
})
export class HomeService {
  selected_ukm: UKM[] = [];
  temp_ukm: UKM[] = [];
  private _ukm: UKM[] =[
    new UKM(
      'v1',
      'Galaxy Futsal',
      'https://kemananihh.files.wordpress.com/2015/01/353401_taraflexgalaxy.jpg?w=459&h=344',
      'Ancol, DKI Jakarta',
      'Futsal'
    ),
    new UKM(
      'v2',
      'Cihuni Badminton Court',
      'https://serpongku.com/wp-content/uploads/2018/03/villa-melati-mas.jpg',
      'Serpong, Banten',
      'Badminton'
    ),
    new UKM(
      'v3',
      'Ben\'s Stadium',
      'http://www.streetdirectory.co.id/stock_images/travel/show_resize_image.php?imageId=ind_13360389580293&w=320&h=240',
      'Bogor, Jawa Barat',
      'Futsal'
    ),
    new UKM(
      'v4',
      'Candra Wijaya Intl. Badminton Center',
      'https://serpongku.com/wp-content/uploads/2018/03/chandra.jpg',
      'Serpong, Banten',
      'Badminton'
    )
  ];
  constructor() { }

  gabung(){
    console.log("Ayo join!");
  }

  getAll_ukm(){
    return [...this._ukm];
  }

  

  get_ukms(){
    return [...this.selected_ukm];
  }

  tambah_ukm(uid){
    this.selected_ukm.push(uid);
    console.log(this.selected_ukm);
  }

  get_detail_ukm(){
    console.log("masuk ke get detail ukm");
    console.log([...this.temp_ukm]);
    return [...this.temp_ukm];
    }

  remove_ukm(id){
    this.selected_ukm = this.selected_ukm.filter(uid =>{
      return uid.id !== id;
    })
  }

}
