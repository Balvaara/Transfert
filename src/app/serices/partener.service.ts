import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartenerService {

  constructor(
    private HttpClient:HttpClient
  ) { }

  getParteners(){
    return this.HttpClient.get(`${environment.myApi}/api/partenaires`);


  }

  getEtat(id:number){
    return this.HttpClient.get(`${environment.myApi}/api/users/partenaire/${id}`);
  }
}
