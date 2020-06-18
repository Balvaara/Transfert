import { Component, OnInit } from '@angular/core';
import { AffectationService } from 'src/app/serices/affectation.service';

@Component({
  selector: 'app-liste-affect',
  templateUrl: './liste-affect.component.html',
  styleUrls: ['./liste-affect.component.scss']
})
export class ListeAffectComponent implements OnInit {
  allaffect;
  constructor(private affectation:AffectationService) { }

  ngOnInit() {
    this.affectation.listeAffect().subscribe(
      data=>{
        this.allaffect=data;
        console.log(data);
      }
    )
  }

}
