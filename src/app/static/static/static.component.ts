import { Component, OnInit } from '@angular/core';
import { StaticService } from 'src/app/serices/static.service';
import { PartenerService } from 'src/app/serices/partener.service';
import { UserService } from 'src/app/serices/user.service';

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.scss']
})
export class StaticComponent implements OnInit {
  allcompte;
  alluser;
  alltarifs;
  allpart;

  constructor(private staticservice:UserService,
    private par:PartenerService,
    private st:StaticService) { }

  ngOnInit() {
    this.par.all().subscribe(
      data=>{
        this.allcompte=data
        
        // console.log(data);
      }
    )
    // );
    // this.staticservice.getAllUsers().subscribe(
    //   data=>{
    //     this.alluser=data
    //     console.log(data);
    //   }
    // ),
    this.st.TarifAll().subscribe(
      data=>{
        this.alltarifs=data["hydra:member"]
        // console.log(data);
      }
    ),
    this.st.AllParts().subscribe(
      data=>{
        this.allpart=data["hydra:member"]
        // console.log(data);
      }
    )
  }

}
