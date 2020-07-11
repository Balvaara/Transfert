import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../serices/connexion.service';
import { User } from '../modules/user';
import { UserService } from '../serices/user.service';
import { PartenerService } from '../serices/partener.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  infos:any
  user:User;
  photovide:any="../assets/img/user3.png"

  constructor(private connexion:ConnexionService,
    private listuser:UserService,
    private partener:PartenerService) { }

  ngOnInit() {
    this.partener.getInfos().subscribe(
      data=>{
        this.infos=data
         console.log(data)
      }
    )
  }
  logout(){
    this.connexion.logout();
    
  }


  AfficheImage(user){
    if (user.photo) {
    return this.listuser.DecodeImage(user)
      
    }else{
      return (this.photovide);
    }

  }
}
