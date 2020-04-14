import { PartenerService } from './../../serices/partener.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partener',
  templateUrl: './partener.component.html',
  styleUrls: ['./partener.component.scss']
})
export class PartenerComponent implements OnInit {
allpart;
  constructor(private parternere:PartenerService) { }

  ngOnInit() {
    this.parternere.getParteners().subscribe(
      data=>{
        this.allpart=data["hydra:member"];
        // console.log(data);
      }
    )
  }

  Etat(id){
    this.parternere.getEtat(id).subscribe(
      data=>{
        alert(JSON.stringify(data["message"]))
        // console.log(data);
        this.parternere.getParteners().subscribe(
          data=>{
            this.allpart=data["hydra:member"];
          // console.log(data); 
          }
        )
       

      }
    )
}
}
