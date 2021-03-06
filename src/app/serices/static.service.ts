import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StaticService {

  constructor(private HttpClient:HttpClient) { }




  getAllComptes(){
    return this.HttpClient.get(`${environment.myApi}/api/compte/cptcompte`);


  }


  getAllSomme(){
    return this.HttpClient.get(`${environment.myApi}/api/compte/sommesolde`);
  }


  gettAllParteners(){
      return this.HttpClient.get(`${environment.myApi}/api/nbparteners`);
    }
    TarifAll(){
      return this.HttpClient.get(`${environment.myApi}/api/tarifs`);
    }
   
    AllParts(){
      return this.HttpClient.get(`${environment.myApi}/api/parts`);
    }
    
}
