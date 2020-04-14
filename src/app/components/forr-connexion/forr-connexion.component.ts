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
  
  constructor(private auth:ConnexionService, private router: Router) { }

  ngOnInit() {
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
      () => {
        console.log('Sign in successful!');
        this.router.navigate(['default']);
      },
      error=>{
        alert(error["message"])
      }
      )
  }


}
