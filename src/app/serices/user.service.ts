import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../modules/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private HttpClient: HttpClient) { }

  Isersion(user){
    return this.HttpClient.post<any>(`${environment.myApi}/api/user`,user);
  }

  getAllUsers(){
    return this.HttpClient.get(`${environment.myApi}/api/listerUsers`);
  }

  getEtat(id:number){
    return this.HttpClient.get(`${environment.myApi}/api/users/status/${id}`);
  }
}                                                                                                                                                                               
