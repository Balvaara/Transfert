import { UserService } from 'src/app/serices/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/modules/user';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
alluser:any;
user:User;
photovide:any="../assets/img/user3.png"
  constructor(
    private listuser:UserService
  ) { }

  ngOnInit() {
    
    this.listuser.getAllUsers().subscribe(
      data=>{
        this.alluser=data;
      //  c 
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
  Action(id:number){
    this.listuser.suppression(id).subscribe(
      data=>{
        alert(JSON.stringify(data["message"]))
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

  AfficheImage(user){
    if (user.photo) {
    return this.listuser.DecodeImage(user)
      
    }else{
      return (this.photovide);
    }

  }
  
 

}
