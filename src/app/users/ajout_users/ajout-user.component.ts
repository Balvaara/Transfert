

import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConnexionService } from 'src/app/serices/connexion.service';
import { UserService } from 'src/app/serices/user.service';
import { async } from '@angular/core/testing';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-user',
  templateUrl: './ajout-user.component.html',
  styleUrls: ['./ajout-user.component.scss'],
})
export class AjoutUserComponent implements OnInit {
  ajouter:FormGroup;
  roles:any;
  isAuth=false
  
  constructor(
    private HttpClient:HttpClient,
    private allroles:ConnexionService,
    private insertion:UserService,
    private router: Router
    ) {
      setTimeout(
        () => {
          this.isAuth = true;
        }, 4000
      );
    
   }
   

  ngOnInit() {
    this.ajouter = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      nomComplet: new FormControl(''),
      profil: new FormControl(''),
    }),
    this.allroles.getRoles().subscribe(
      data=>{this.roles=data;
      // console.log(data);
    }
       )
  }
  
      
  OnSubmite(){

      const user={
          username:this.ajouter.value.username,
          password:this.ajouter.value.password,
          nomComplet:this.ajouter.value.nomComplet,
          isActive:true,
          profil:`api/roles/${this.ajouter.value.profil}`,
      }
      // console.log(user);
      this.insertion.Isersion(user).subscribe(data=>{
        alert(JSON.stringify (data["message"]));
        this.router.navigate(['/default/liste-users']);
      },
      error=>{
        alert(JSON.stringify (error["message"]))
      }
      )
    
 
 
  }
  
}
