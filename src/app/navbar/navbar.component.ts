import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../serices/connexion.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( private connexion:ConnexionService) { }

  ngOnInit() {
  }
  logout(){
    this.connexion.logout();
    
  }

}
