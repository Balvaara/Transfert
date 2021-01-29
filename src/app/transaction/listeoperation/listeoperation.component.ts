import { Component, OnInit } from '@angular/core';
import { OperationService } from 'src/app/serices/operation.service';

@Component({
  selector: 'app-listeoperation',
  templateUrl: './listeoperation.component.html',
  styleUrls: ['./listeoperation.component.scss']
})
export class ListeoperationComponent implements OnInit {
  allTransaction;
  allRetait;
  variable=false; 
  variable1=false;  

  constructor(private operation:OperationService) { }

  ngOnInit() {
   
    this.operation.getAll().subscribe(
      data=>{
        this.allTransaction=data
        // console.log(data)
      }
    )
  
  this.operation.getAllRetrait().subscribe(
    data=>{
      this.allRetait=data
      // console.log(data)
    }
  )
}
mesRetraits(){
  this.variable1 = !this.variable1;
  
 
}
mesDepots(){
  this.variable = !this.variable;
  
 
}
}
