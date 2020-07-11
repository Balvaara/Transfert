import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../serices/connexion.service';
import { UserService } from '../serices/user.service';
import { PartenerService } from '../serices/partener.service';
import { User } from '../modules/user';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-navpar',
  templateUrl: './navpar.component.html',
  styleUrls: ['./navpar.component.scss']
})
export class NavparComponent implements OnInit {
    ajouter:FormGroup;
  photovide:any="../assets/img/user3.png"
infos:any
user:User;
  constructor(private connexion:ConnexionService,
    private listuser:UserService,
    private partener:PartenerService) { }

  ngOnInit() {
    this.ajouter = new FormGroup({
        search: new FormControl(''),
      
        
    }),
    this.partener.getInfosPart().subscribe(
      data=>{
        this.infos=data
      //  console.log(data)
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
