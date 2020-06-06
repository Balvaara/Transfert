import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  constructor(private HttpClient:HttpClient) { }



  Depot(depot)
  {
    return this.HttpClient.post<any>(`${environment.myApi}/api/transaction/depot`,depot);
  }

  Retrait(retrait)
  {
    return this.HttpClient.post<any>(`${environment.myApi}/api/transaction/retait`,retrait);
  }

  frais(montant)
  {
    return this.HttpClient.get(`${environment.myApi}/api/tarif`,montant);
  }

  RechCode(code){
  
    return this.HttpClient.get<any>(`${environment.myApi}/api/transactions?code=${code}`);
  }
  getAll(){
  
    return this.HttpClient.get<any>(`${environment.myApi}/api/transactions`);
  }
}
