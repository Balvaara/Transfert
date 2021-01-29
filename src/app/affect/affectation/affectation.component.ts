import { Component, OnInit } from '@angular/core';
import { AffectationService } from 'src/app/serices/affectation.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
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
submitted = false;
  constructor(private Affectation:AffectationService,
    private router:Router,
    private compteservice :CompteService ,
    private formBuilder: FormBuilder  ) { }

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
    this.AffecttionForm = this.formBuilder.group({
      dateAfect: ['',Validators.required],
      dateFin: ['',Validators.required],
      numero: ['',Validators.required],
      user: ['',Validators.required],
      
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
  this.submitted = true;

        // stop here if form is invalid
        if (this.AffecttionForm.invalid) {
            return;
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