import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../serices/connexion.service';

@Component({
  selector: 'app-navpar',
  templateUrl: './navpar.component.html',
  styleUrls: ['./navpar.component.scss']
})
export class NavparComponent implements OnInit {

  constructor(private connexion:ConnexionService) { }

  ngOnInit() {
  }
  logout(){
    this.connexion.logout();
    
  }

}
