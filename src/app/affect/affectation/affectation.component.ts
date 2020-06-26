import { Component, OnInit } from '@angular/core';
import { AffectationService } from 'src/app/serices/affectation.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CompteService } from 'src/app/serices/compte.service';

@Component({
  selector: 'app-affectation',
  templateUrl: './affectation.component.html',
  styleUrls: ['./affectation.component.scss']
})
export class AffectationComponent implements OnInit {
AffecttionForm:FormGroup;
numeros;
users;
numero;
solde;
  constructor(private Affectation:AffectationService,
    private router:Router,
    private compteservice :CompteService   ) { }

  ngOnInit() {
    this.Affectation.listeComptes().subscribe(
      data=>{
        this.numeros=data;
        // console.log(data);
      }
    ),
    this.Affectation.listeUsers().subscribe(
      data=>{
        this.users=data
        // console.log(data);
      }
    ),
    this.AffecttionForm = new FormGroup({
      dateAfect: new FormControl(''),
      dateFin: new FormControl(''),
      numero: new FormControl(''),
      user: new FormControl(''),
      
    })
    this.onChanges();

  }

  onChanges(): void {
    this.AffecttionForm.get('numero').valueChanges.subscribe(val => {
      // console.log(val);
     
      this.getPatnerByNinea(val);
    });
  }
  get f() { return this.AffecttionForm.controls; }

  OnSub(){

    const affect={
      dateAfect:this.AffecttionForm.value.dateAfect,
      dateFin:this.AffecttionForm.value.dateFin,
      comptes:`api/comptes/${this.AffecttionForm.value.numero}`,
      users:`api/users/${this.AffecttionForm.value.user}`,

  }
  // console.log(user);
  this.Affectation.Affectation(affect).subscribe(data=>{
    alert(JSON.stringify (data["message"]));
  this.router.navigate(['/defaultpart/liste-affectation']);
  }
  )
  }
  getPatnerByNinea(val) {
    this.compteservice.RechNumero1(val).subscribe
    (data => {
      if (data["hydra:member"][0]) {
        let comptes = data["hydra:member"][0] ;
      //  console.log(comptes);
      // this.iri = comptes['@id'];
    this.numero=comptes['id'];
        // console.log(data["hydra:member"][0]);
        this.solde = comptes.solde +'CFA';

        // this.DepotForm.get('solde').disable();
        // this.cerv = 1;

      }
     
      
    }
    ),
  
  error => {
    console.log(error);
    console.log();
  };

}
}