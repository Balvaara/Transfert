
import { User } from './../../modules/user';
import { ConnexionService } from './../../serices/connexion.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forr-connexion',
  templateUrl: './forr-connexion.component.html',
  styleUrls: ['./forr-connexion.component.scss']
})
export class ForrConnexionComponent implements OnInit {
    formconnexion:FormGroup;
date;  
  constructor(private auth:ConnexionService, private router: Router) { }

  ngOnInit() {
    this.date= new Date;
   this.formconnexion = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }
  OnSub(){
    // console.log(this.formconnexion.value);
    let user={
      username:this.formconnexion.value.username,
      password:this.formconnexion.value.password,

    };

    this.auth.getConnexion(user).subscribe(
      data=> {
        //  console.log(data['data']['libelle']);
        if (data['data']['libelle']=='ADMIN' || data['data']['libelle']=='SUP_ADMIN' || data['data']['libelle']=='CAISSIER') {
                  this.router.navigate(['default/static']);

        }
        else if(data['data']['libelle']=='ADMIN_PARTENAIRE' || data['data']['libelle']=='PARTENAIRE' || data['data']['libelle']=='CAISSIER_PARTENAIRE') {
          this.router.navigate(['defaultpart/static-part']);


        }
      },
      error => {
        alert(error["message"])
      }
      )
  }


}