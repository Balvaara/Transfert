import { UserService } from 'src/app/serices/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
alluser:any;
  constructor(
    private listuser:UserService
  ) { }

  ngOnInit() {
    this.listuser.getAllUsers().subscribe(
      data=>{
        this.alluser=data;
      //  console.log(data); 
      }
    )
  }
  
  Etat(id:number){
    this.listuser.getEtat(id).subscribe(
      data=>{
        alert(JSON.stringify(data["message"]))
        // console.log(data);
        this.listuser.getAllUsers().subscribe(
          data=>{
            this.alluser=data;
          // console.log(data); 
          }
        )
       

      },
      
          error=>{
            alert(JSON.stringify (error["message"]))
          }
    
    )


  }
  
 

}
