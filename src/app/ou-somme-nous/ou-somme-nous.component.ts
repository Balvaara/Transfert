import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ou-somme-nous',
  templateUrl: './ou-somme-nous.component.html',
  styleUrls: ['./ou-somme-nous.component.scss']
})
export class OuSommeNousComponent implements OnInit {
  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  zoom:number;
  constructor() { }

  ngOnInit() {
    this.setCurrentLocation();
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
      });
    }
  }

}
