import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { OperationService } from 'src/app/serices/operation.service';
import { Router } from '@angular/router';
import { CompteService } from 'src/app/serices/compte.service';
import { PartenerService } from 'src/app/serices/partener.service';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.scss']
})
export class OperationComponent implements OnInit {
  TransactionForm:FormGroup;
  solde;
  date;
  type=''
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
  recu:any=[]
  recumontant:any=[]
  infos

  variable : any = false;
  submitted = false;
   loading : any = false;
  constructor( private operation:OperationService,private router:Router,
    private compteservice:CompteService,
    private partener:PartenerService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.date= new Date;
    this.cerv=0
    this.partener.getInfosPart().subscribe(
      data=>{
        this.infos=data
      //  console.log(data)
      }
    )
    
    this.TransactionForm =this.formBuilder.group({
      nomdep: ['',Validators.required],
      teldep: ['',[Validators.required, Validators.minLength(9)]],
      nomRecepteur: ['',Validators.required],
      telrep: ['',[Validators.required, Validators.minLength(9)]],
      montant: ['',Validators.required],
      tarifs: ['',Validators.required],
      piece: ['',Validators.required],
      montantt: ['',Validators.required],
      depot: ['',Validators.required],
      retrait: ['',Validators.required],
      code: ['',Validators.required],
      numero: ['',Validators.required],



     })
     this.onChanges();
     this.onChangess();
     this. FindCode();
     this.FindFrais();
     this.MySolde();

     this.operation.Mycompte().subscribe(
       data=>{
         this.numeros=data
       }
     )

    }
    MySolde(): void {
      this.TransactionForm.get('numero').valueChanges.subscribe(val => {
        // console.log(val);
       
        this.getCompteBySolde(val);
      });
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
this.submitted=true
// if (this.TransactionForm.invalid) {
//   return;
// }
if (code == null) {

 
this.loading = !this.loading;


this.operation.Depot(Depot).subscribe(
  data => {
    alert(JSON.stringify(data["message"]))
  //  console.log(data);
  // this.router.navigate(["/defaultpart/lister-operation"]);
  },
  error => {
    console.log(error);
  })
}else{
  
this.loading = !this.loading;

  this.operation.Retrait(Retrait).subscribe(
    data=>{
      alert(JSON.stringify(data["message"]))
  // this.router.navigate(["/defaultpart/lister-operation"]);
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
getCompteBySolde(val) {
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

    }else{
      this.solde='0.00';
      this.TransactionForm.get('solde').disable()
    }
   
    
  }
  ),

error => {
  console.log(error);
  console.log();
};

}
Recu(){
  this.variable = !this.variable;
  // this.operation.RechCode(this.code).subscribe(
  //   data=>{
    // this.recu=this.TransactionForm.value
    // this.recumontant=this.montantt
    
    if (this.code==null) {

      this.recu=[
        this.nomdep=this.TransactionForm.value.nomdep,
         this.teldep=this.TransactionForm.value.teldep,
        this.nomRecepteur=this.TransactionForm.value.nomRecepteur,
        this.telrep=this.TransactionForm.value.telrep,
        this.montant=this.TransactionForm.value.montant,
        this.tarifs=this.tarifs,
        this.montantt=this.montantt,
        this.type='Depot'
      ]
      // console.log(this.recu);
    }else{

      this.recu=
      [
        this.nomdep=this.nomdep,
        this.teldep=this.teldep,
        this.nomRecepteur=this.nomRecepteur,
        this.telrep=this.telrep,
        this.montant=this.montant,
        this.tarifs=this.tarifs,
        this.montantt=this.montantt,
        this.type='Retrait'
        
       
      ]
     this.code=this.TransactionForm.value.code

      //  console.log(this.recu);
    }
    // this.router.navigate(["/defaultpart/lister-operation"]);
     

  //   }
  // )
}

}
