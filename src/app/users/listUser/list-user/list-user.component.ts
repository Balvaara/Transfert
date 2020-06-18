import { UserService } from 'src/app/serices/user.service';
import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { User } from 'src/app/modules/user';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
alluser:any;
username ='';
password ='';
nomComplet ='';
idmod:any
profil=''
isActive
usechange;
passwordchange;
nomchange;


user:User;
myId:any
ajouter:FormGroup
variable : any = false;
photovide:any="../assets/img/user3.png"
  constructor(
    private listuser:UserService,private router:Router
  ) { }

  ngOnInit() {
    
    this.listuser.getAllUsers().subscribe(
      data=>{
        this.alluser=data;
      //  c 
      }
    ),
    this.ajouter = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      nomComplet: new FormControl(''),
      // isActive: new FormControl(''),
      id: new FormControl(''),


    }),
    this.onChanges();
  }
  
  onChanges(): void {
    this.ajouter.get('user.id').valueChanges.subscribe(val => {
      // console.log(val);
     
      this.editUser(val);
    });
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
            
            alert("<div class=''> "+ JSON.stringify (error["message"]))
            
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
  editUser(val){
    //  console.log(id)
  this.variable = !this.variable;
  this.listuser.edite(val).subscribe(
    data=>{
      console.log(data)
      if (data["hydra:member"][0]) {
      const user = data["hydra:member"][0] ;
     this.idmod =user.id;
      this.username =user.username;
      this.password =user.password;
      this.nomComplet =user.nomComplet;
      this.nomComplet =user.nomComplet;
      // this.isActive =user.isActive



       this.ajouter.get('idmod').disable();
      this.ajouter.get('username').enable();
      this.ajouter.get('password').enable();
      this.ajouter.get('nomComplet').enable();
      // this.ajouter.get('isActive').disable();



      }
      // console.log(data)
      // this.myId=data["hydrat:member"]
    }
  )
  // //  this.router.navigate(['default/edite'])
   }
  OnSubmite(){
    
    // console.log(this.username)
    if (this.ajouter.value.username!=='') {
       this.usechange= this.ajouter.value.username;
     
  }
    else {
      this.usechange=this.username; 
    }
  if(this.ajouter.value.nomComplet!==''){
   
        this.nomchange= this.ajouter.value.nomComplet
    
    }else{
      this.nomchange=this.nomComplet;

    }
    if(this.ajouter.value.password!==''){
   
      this.passwordchange= this.ajouter.value.password
    
  }else{
    this.passwordchange=this.password;

  }
  const user={
    username:this.usechange,
    password:this.passwordchange,
    nomComplet:this.nomchange,
}
    
    // console.log(user)


    this.listuser.modifier(this.idmod,user).subscribe(
      data=>{
        alert(JSON.stringify (data["message"]));
      }
    )
  }
  
}
