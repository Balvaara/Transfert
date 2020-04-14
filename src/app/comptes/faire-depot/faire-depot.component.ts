import { Component, OnInit } from '@angular/core';
import { CompteService } from 'src/app/serices/compte.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faire-depot',
  templateUrl: './faire-depot.component.html',
  styleUrls: ['./faire-depot.component.scss']
})
export class FaireDepotComponent implements OnInit {
 
  DepotForm: FormGroup;
  cerv;
  public loading = false;
  iri: string;
  montant;
  numero;
  solde;

  constructor( private compteService: CompteService, private route: Router) { }

  ngOnInit() {
    // this.cerv = 0;
    this.DepotForm = new FormGroup({
         numero: new FormControl(''),
          //  solde: new FormControl(''),
           montant:new FormControl(''),
         });
    this.onChanges();
  }
  onChanges(): void {
    this.DepotForm.get('numero').valueChanges.subscribe(val => {
      // console.log(val);

      this.getPatnerByNumero(val);
    });
  }
  get f() { return this.DepotForm.controls; }
  OnSub() {
    const numero = this.DepotForm.value.numero;
    const montant=this.DepotForm.value.montant

  



  const compteEX = {
    numero: numero,
    montant:montant
    
  };
   if (this.cerv !== 1) {
  this.loading = true;

  this.compteService.faireDepot(compteEX).subscribe(
      data => {
      //  console.log(data);
      alert(JSON.stringify(data["message"]))
        this.route.navigate(['/default/liste-depots']);
      //  this.ndm.navigateByUrl('/listComptes');
      },
      error => {
        console.log(error);
      }
    );
  }else{
    error => {
      console.log(error);
    }
  }

  }

  getPatnerByNumero(val) {
    this.compteService.RechNumero(val).subscribe
    (data => {
      if (data["hydra:member"][0]) {
        let comptes = data["hydra:member"][0] ;
      //  console.log(comptes);
      // this.iri = comptes['@id'];
    this.numero=comptes['numero'];
        // console.log(data["hydra:member"][0]);
        this.solde = comptes.solde;

        
         this.DepotForm.get('solde').disable();
     
         this.DepotForm.get('montant').enable();

        //  this.cerv = 1;

      }else{
        this.montant='00';
        this.solde='0.00';
        this.DepotForm.get('solde');
        this.DepotForm.get('montant').disable();

     
      
    }
    }
    ),
  
  error => {
    console.log(error);
    console.log();
  };

}
}