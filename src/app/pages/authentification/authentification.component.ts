import { ConnexionService } from './../../serices/connexion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {
  roles;
  constructor(private  conn:ConnexionService) {}

  ngOnInit() {
  }
  

}
