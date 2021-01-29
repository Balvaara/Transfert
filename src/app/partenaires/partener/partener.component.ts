import { PartenerService } from './../../serices/partener.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partener',
  templateUrl: './partener.component.html',
  styleUrls: ['./partener.component.scss']
})
export class PartenerComponent implements OnInit {
public allpart:any;
 term:string;
 cont:any;
  constructor(private parternere:PartenerService) { }

  ngOnInit() {
    this.parternere.getParteners().subscribe(
      data=>{
        this.allpart=data["hydra:member"];
        //  console.log(data);
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

MyContrat(id){
  this.parternere.MyContrat(id).subscribe(
    data=>{
      this.cont=data["hydra:member"]
      // console.log(this.cont); 
        }
      )
     

  
}
Action(id:number){
  this.parternere.suppression(id).subscribe(
    data=>{
      alert(JSON.stringify(data["message"]))
      this.parternere.getParteners().subscribe(
        data=>{
          this.allpart=data["hydra:member"];
          //  console.log(data);
        }
      )
    
     
    },
    
        error=>{
          
          alert( JSON.stringify (error["message"]))
          
        }
  
  )


}
}
