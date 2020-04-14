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
  constructor(private staticservice:StaticService) { }

  ngOnInit() {
    this.staticservice.getAllComptes().subscribe(
      data=>{
        this.allcompte=data
        console.log(data);
      }
    );
    this.staticservice.getAllSomme().subscribe(
      data=>{
        this.allsomme=data
        console.log(data);

      }
    )
  }

}
