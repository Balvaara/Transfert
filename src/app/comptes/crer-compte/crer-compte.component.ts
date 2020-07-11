import { ConnexionService } from './../../serices/connexion.service';
import { CompteService } from './../../serices/compte.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crer-compte',
  templateUrl: './crer-compte.component.html',
  styleUrls: ['./crer-compte.component.scss']
})
export class CrerCompteComponent implements OnInit {
  CompteForm:FormGroup;
  // existe:FormGroup;
  roles;
  cerv;
  public loading = false;
  iri: string;
  ninea;
  nomComplet=''; 
  username ='';
  password ='';
  register ='';
  solde;
  tel='';
  description=''
  adresse='';
  localite='';

  constructor(
    private compteservice:CompteService,
    private allroles:ConnexionService,
    private route:Router
  ) { }

  ngOnInit() {
    this.cerv = 0;
    this.CompteForm = new FormGroup({
          register: new FormControl(''),
           ninea: new FormControl(''),
           nomComplet: new FormControl(''),
           username: new FormControl(''),
           password: new FormControl(''),
           solde: new FormControl(''),
           tel: new FormControl(),
           adresse: new FormControl(''),
           description: new FormControl(''),
           localite: new FormControl(''),

           
         })
        
    this.onChanges();
  }
  onChanges(): void {
    this.CompteForm.get('ninea').valueChanges.subscribe(val => {
      // console.log(val);
     
      this.getPatnerByNinea(val);
    });
  }

  get f() { return this.CompteForm.controls; }

  OnSub(){
      const ninea = this.CompteForm.value.ninea;
    const register = this.CompteForm.value.register;
    const nomComplet = this.CompteForm.value.nomComplet;
    const username =this.CompteForm.value.username;
    const password =this.CompteForm.value.password;
    const tel =parseInt(this.CompteForm.value.tel);
    const adresse =this.CompteForm.value.adresse;
    const description =this.CompteForm.value.description;
    const localite =this.CompteForm.value.localite;


 


   const compteNP = {
   
      register: register,
      ninea: ninea,
      nomComplet: nomComplet,
      username:username,
      password:password,
      tel:tel,
      adresse:adresse,
      description:description,
      localite:localite,


      solde:500000,
    
     
     
 
  }
  const compteEX = {
    ninea: ninea,
    solde: 500000
    
  };

  if (this.cerv !== 1) {
    this.loading = true;
  
    this.compteservice.CrerComptesPartenaire(compteNP).subscribe(
        data => {
          alert(JSON.stringify(data["message"]))
        //  console.log(data);
         this.route.navigate(['/default/liste-comptes']);
        },
        error => {
          console.log(error)
        }
      );
    } else {
      this.loading = true;
      this.compteservice.CrerComptesPartenaireEx(compteEX).subscribe(
        data => {
          
          alert(JSON.stringify(data["message"]))
        this.route.navigate(['/default/liste-comptes']);
          // console.log(data);
          this.loading = false;
        });
  
     }
  

}

getPatnerByNinea(ninea) {
  this.compteservice.RechNinea(ninea).subscribe
  (data => {
    if (data["hydra:member"][0]) {
      const partner = data["hydra:member"][0] ;
      // console.log(partner);
      this.iri = partner['@id'];
      this.ninea=partner["ninea"];
      console.log(data["hydra:member"][0]);
      const user = partner.users[0];
      this.username =user.username;
      this.password = user.password;
      this.nomComplet = user.nomComplet;
      this.register = partner.register;
      this.tel = partner.tel;
      this.adresse = partner.adresse;
      this.description = partner.description;
      this.localite = partner.localite;





      this.CompteForm.get('username').disable();
      this.CompteForm.get('password').disable();
      this.CompteForm.get('nomComplet').disable();
      this.CompteForm.get('register').disable();
      this.CompteForm.get('tel').disable();
      this.CompteForm.get('adresse').disable();
      this.CompteForm.get('description').disable();
      this.CompteForm.get('localite').disable();



      this.cerv = 1;

    } else {
      this.nomComplet = '';
      this.username = '';
      this.password = '';
      this.register = '';
      this.ninea='';
      this.tel='';
      this.adresse='';
      this.description='';
      this.localite='';



      this.CompteForm.get('username').enable();
      this.CompteForm.get('password').enable();
      this.CompteForm.get('nomComplet').enable();
      this.CompteForm.get('register').enable();
      this.CompteForm.get('tel').enable();
      this.CompteForm.get('adresse').enable();
      this.CompteForm.get('description').enable();
      this.CompteForm.get('localite').enable();






    }
  },
  error => {
    console.log(error);
    console.log();
  });
}
}