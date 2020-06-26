import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../serices/connexion.service';
import { UserService } from '../serices/user.service';
import { PartenerService } from '../serices/partener.service';
import { User } from '../modules/user';

@Component({
  selector: 'app-navpar',
  templateUrl: './navpar.component.html',
  styleUrls: ['./navpar.component.scss']
})
export class NavparComponent implements OnInit {
  photovide:any="../assets/img/user3.png"
infos:any
user:User;
  constructor(private connexion:ConnexionService,
    private listuser:UserService,
    private partener:PartenerService) { }

  ngOnInit() {
    this.partener.getInfos().subscribe(
      data=>{
        this.infos=data['hydrat:member']
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
