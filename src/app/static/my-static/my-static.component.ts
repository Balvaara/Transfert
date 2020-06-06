import { Component, OnInit } from '@angular/core';
import { StaticService } from 'src/app/serices/static.service';

@Component({
  selector: 'app-my-static',
  templateUrl: './my-static.component.html',
  styleUrls: ['./my-static.component.scss']
})
export class MyStaticComponent implements OnInit {
allsomme;
allcompte;
allpartener;
alltrans;
pageOfItems: Array<any>;
 alltarifs:any
page:number;
pageSize:number;

  constructor(private staticservice:StaticService) {
   
   }

  ngOnInit() {
    this.staticservice.getAllComptes().subscribe(
      data=>{
        this.allcompte=data
        // console.log(data);
      }
    );
    this.staticservice.getAllSomme().subscribe(
      data=>{
        this.allsomme=data
        // console.log(data);

      }
    )

    this.staticservice.gettAllParteners().subscribe(
      data=>{
        this.allpartener=data
        // console.log(data);

      }
    )

    this.staticservice.TarifAll().subscribe(
      data=>{
        this.alltarifs=data["hydra:member"]
      //  console.log(data);

      }
    )
   
   
  }


}
