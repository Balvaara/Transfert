import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(
    private HttpClient:HttpClient
  ) { }

  CrerComptesPartenaire(compte){
  
    return this.HttpClient.post<any>(`${environment.myApi}/api/compte/nouveau_partenaire`,compte);
  }

  listeCompte(){
  
    return this.HttpClient.get(`${environment.myApi}/api/comptes`);
  }

  RechNinea(ninea){
  
    return this.HttpClient.get<any>(`${environment.myApi}/api/partenaires?ninea=${ninea}`);
  }

  CrerComptesPartenaireEx(compteex:any){
  
    return this.HttpClient.post(`${environment.myApi}/api/compte/partenaire_exist`,compteex);
  }
  
  RechNumero(numero){
  
    return this.HttpClient.get<any>(`${environment.myApi}/api/comptes?numero=${numero}`);
  }

  faireDepot(numero:any){
  
    return this.HttpClient.post(`${environment.myApi}/api/compte/fairedepot`,numero);
  }


  listeDepot(){
  
    return this.HttpClient.get(`${environment.myApi}/api/depots`);
  }
  
  
}
