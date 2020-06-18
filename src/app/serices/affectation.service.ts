import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AffectationService {

  constructor(private HttpClient:HttpClient) { }


  listeComptes(){
  
    return this.HttpClient.get(`${environment.myApi}/api/listerComptesByPartener`);
  }


  listeUsers(){
  
    return this.HttpClient.get(`${environment.myApi}/api/listerUserByPartener`);
  }

  Affectation(compte){

    return this.HttpClient.post<any>(`${environment.myApi}/api/compte/AffectationCompte`,compte);
  }

  listeAffect(){
  
    return this.HttpClient.get(`${environment.myApi}/api/listerAffectationByPartener`);
  }

}
