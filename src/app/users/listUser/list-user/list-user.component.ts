import { UserService } from 'src/app/serices/user.service';
import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { User } from 'src/app/modules/user';
import { FormGroup, FormControl } from '@angular/forms';
import { ConnexionService } from 'src/app/serices/connexion.service';


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

roles;
user:User;
myId:any
ajouter:FormGroup
variable : any = false;
photovide:any="../../../../assets/img/user.png"
  constructor(
    private listuser:UserService,private router:Router,
    private role:ConnexionService
  ) { }

  ngOnInit() {
    this.role.getRoles().subscribe(
      data=>{
        this.roles=data;
        //  console.log(data);  
      }
    ),
    this.listuser.getAllUsers().subscribe(
      data=>{
        this.alluser=data;
          console.log(data);  

      }
    ),
    this.ajouter = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      nomComplet: new FormControl(''),
      profil: new FormControl(''),
      id: new FormControl(''),


    }),
    this.onChanges();
  }
  
  onChanges(): void {
    this.ajouter.get('id').valueChanges.subscribe(val => {
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
      
       
      },
      
          error=>{
            
            alert( JSON.stringify (error["message"]))
            
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
      // console.log(data)
      if (data) {
      const user = data ;
     this.idmod =user.id;
      this.username =user.username;
      this.password =user.password;
      this.nomComplet =user.nomComplet;
      this.nomComplet =user.nomComplet;
      //  this.profil =user.profil.libelle



       this.ajouter.get('idmod').disable();
      this.ajouter.get('username').enable();
      this.ajouter.get('password').enable();
      this.ajouter.get('nomComplet').enable();
    //  this.ajouter.get('profil').disable();



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
    profil:`api/roles/${this.ajouter.value.profil}`,
}
    
    // console.log(user)


    this.listuser.modifier(this.idmod,user).subscribe(
      data=>{
        alert(JSON.stringify (data["message"]));
        this.listuser.getAllUsers().subscribe(
          data=>{
            this.alluser=data;
            // console.log(data);  
          }
        )
      }
    )
   
  }
  
}
