import { Component, OnInit } from '@angular/core';
import { PartenerService } from '../serices/partener.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
my:any
  constructor(private service:PartenerService) { }

  ngOnInit() {
    this.service.getInfos().subscribe(
    data=>{
      this.my= data
      // console.log(data)
    }
   )
 
  
  }

}