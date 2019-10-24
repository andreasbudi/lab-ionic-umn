import { Injectable } from '@angular/core';
import { UKM } from '../home/home.model';

@Injectable({
  providedIn: 'root'
})
export class MybookingServiceService {
  simpanan_venue : UKM[] = [];

  constructor() { }

  getAllSimpanan(){
    return [...this.simpanan_venue];
  }
  my_booking(newSimpanan : UKM){
    this.simpanan_venue.push(newSimpanan);
  }

  tambah_venue(data:UKM){
    this.simpanan_venue.push(data);
    
  }

  delete_venue(data:UKM){
    this.simpanan_venue = this.simpanan_venue.filter(sisa_venue => {
      return sisa_venue.id !== data.id;
    })
  }
}
