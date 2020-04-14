import { Component, OnInit } from '@angular/core';
import { CompteService } from 'src/app/serices/compte.service';

@Component({
  selector: 'app-liste-compte',
  templateUrl: './liste-compte.component.html',
  styleUrls: ['./liste-compte.component.scss']
})
export class ListeCompteComponent implements OnInit {
allCompte;
  constructor( private listcmp:CompteService) { }

  ngOnInit() {
    this.listcmp.listeCompte().subscribe(
      data=>{
        this.allCompte=data["hydra:member"]
        //  console.log(data);
      },
      error => {
        console.log(error);
        console.log();
      }
    )
  }

}
