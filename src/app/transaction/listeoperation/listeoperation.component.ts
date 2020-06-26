import { Component, OnInit } from '@angular/core';
import { OperationService } from 'src/app/serices/operation.service';

@Component({
  selector: 'app-listeoperation',
  templateUrl: './listeoperation.component.html',
  styleUrls: ['./listeoperation.component.scss']
})
export class ListeoperationComponent implements OnInit {
  allTransaction;
  constructor(private operation:OperationService) { }

  ngOnInit() {
    this.operation.getAll().subscribe(
      data=>{
        this.allTransaction=data
        console.log(data)
      }
    )
  }

}
