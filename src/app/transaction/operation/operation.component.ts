import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OperationService } from 'src/app/serices/operation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.scss']
})
export class OperationComponent implements OnInit {
  TransactionForm:FormGroup;
  montantt=''
  nomdep=''
  iri:string
  teldep=''
  nomRecepteur=''
  telrep=''
  montant=''
  piece=''
  tarifs=''
  select
  depot
  retrait
  code
  cerv;
  numero;
  numeros
  public loading = false;
  constructor( private operation:OperationService,private router:Router) { }

  ngOnInit() {
    this.cerv=0
    
    this.TransactionForm = new FormGroup({
      nomdep: new FormControl(''),
      teldep: new FormControl(''),
      nomRecepteur: new FormControl(''),
      telrep: new FormControl(''),
      montant: new FormControl(''),
      tarifs: new FormControl(''),
      piece: new FormControl(''),
      montantt: new FormControl(''),
      depot: new FormControl(''),
      retrait: new FormControl(''),
      code: new FormControl(''),
      numero: new FormControl(''),



     })
     this.onChanges();
     this.onChangess();
     this. FindCode();
     this.FindFrais();

     this.operation.Mycompte().subscribe(
       data=>{
         this.numeros=data
       }
     )

    }
    onChanges(): void {
      this.TransactionForm.get('depot').valueChanges.subscribe(val => {
        // console.log(val);
       
        this.faireDepot(val);
      });
    }
    FindFrais(): void {
      this.TransactionForm.get('montant').valueChanges.subscribe(val => {
        // console.log(val);
       
        this.TraisMontant(val);
      });
    }

    onChangess(): void {
      this.TransactionForm.get('retrait').valueChanges.subscribe(val => {
        // console.log(val);
       
        this.faireRetrait(val);
      });
    }

    FindCode(): void {
      this.TransactionForm.get('code').valueChanges.subscribe(val => {
        // console.log(val);
       
        this.faireRetraitByCode(val);
      });
    }
  get f() { return this.TransactionForm.controls; }

  OnSub(){
      const nomdep = this.TransactionForm.value.nomdep;
      const teldep = this.TransactionForm.value.teldep;
      const nomRecepteur = this.TransactionForm.value.nomRecepteur;
      const montant =this.TransactionForm.value.montant;
      const piece =this.TransactionForm.value.piece;
      const telrep =this.TransactionForm.value.telrep;
      const code =this.TransactionForm.value.code;







 const Depot = {
 
    nomdep: nomdep,
    teldep: teldep,
    nomRecepteur: nomRecepteur,
    montant:montant,
    telrep:telrep,
    comptesDep:`api/comptes/${this.TransactionForm.value.numero}`,


    
   
   

}
const Retrait = {
    code:code,
    piece:piece,
    compteRetraits:`api/comptes/${this.TransactionForm.value.numero}`,

  
  
};

if (code == null) {

 
  this.loading = true;

  this.operation.Depot(Depot).subscribe(
    data => {
      alert(JSON.stringify(data["message"]))
      // console.log(data);
    this.router.navigate(["/defaultpart/lister-operation"]);
    },
    error => {
      console.log(error);
    })
  }else{
    this.operation.Retrait(Retrait).subscribe(
      data=>{
        alert(JSON.stringify(data["message"]))
    this.router.navigate(["/defaultpart/lister-operation"]);

      },
      error => {
        console.log(error);
      }
    )
  }
   


}
faireDepot(val) {
  
  
    this.TransactionForm.get('piece').disable();
    this.TransactionForm.get('code').disable(); 
    this.TransactionForm.get('tarifs').disable(); 
    this.TransactionForm.get('montantt').disable(); 




    this.TransactionForm.get('nomdep').enable(); 
    this.TransactionForm.get('teldep').enable(); 
    this.TransactionForm.get('nomRecepteur').enable(); 
    this.TransactionForm.get('telrep').enable(); 
    this.TransactionForm.get('montant').enable();



  }
  faireRetrait(val) {
 
        
    this.TransactionForm.get('code').enable(); 
    
    this.TransactionForm.get('nomdep').disable(); 
    this.TransactionForm.get('teldep').disable(); 
    this.TransactionForm.get('nomRecepteur').disable(); 
    this.TransactionForm.get('telrep').disable();
    this.TransactionForm.get('montant').disable();
    this.TransactionForm.get('montantt').disable();
    this.TransactionForm.get('tarifs').disable();
    this.TransactionForm.get('montantt').disable();



    this.TransactionForm.get('piece').enable(); 
    

        //  this.cerv = 1;

      }

      faireRetraitByCode(code){
        this.operation.RechCode(code).subscribe
        (data => {
          
          if (data["hydra:member"][0]) {
            let Transaction = data["hydra:member"][0] ;
        // console.log(Transaction);
          // this.iri = comptes['@id'];
        this.code=Transaction['code'];
            // console.log(data["hydra:member"][0]);
            this.nomdep = Transaction.nomdep;
            this.teldep = Transaction.teldep;
            this.nomRecepteur = Transaction.nomRecepteur;
            this.telrep = Transaction.telrep;
            this.montant = Transaction.montant;
            this.tarifs = Transaction.tarifs;
            this.montantt = Transaction.tarifs + Transaction.montant      ;


    
      }

  })
}

TraisMontant(val){
  this.operation.MontantFrais(val).subscribe
  (data => {  

    
    if (data) {
   console.log(data);

      let Transaction = data;
      
    //  this.iri = Transaction['@id'];
  // this.code=Transaction['frais'];
  //     // console.log(data["hydra:member"][0]);
    this.tarifs = Transaction.frais

    this.montantt=Transaction.frais + this.TransactionForm.value.montant;

      this.TransactionForm.get('tarifs').disable();
      this.TransactionForm.get('montantt').disable();



}

})

}

}
