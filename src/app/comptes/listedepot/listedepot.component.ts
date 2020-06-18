import { Component, OnInit } from '@angular/core';
import { CompteService } from 'src/app/serices/compte.service';

@Component({
  selector: 'app-listedepot',
  templateUrl: './listedepot.component.html',
  styleUrls: ['./listedepot.component.scss']
})
export class ListedepotComponent implements OnInit {
  alldepot;
  constructor(private compteservice:CompteService) { }

  ngOnInit() {
    this.compteservice.listeDepot().subscribe(
      data=>{
        this.alldepot=data["hydra:member"];
        console.log(data);
      }
    )
  }


}
