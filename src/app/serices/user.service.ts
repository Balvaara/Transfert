import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../modules/user';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:User;

  constructor(private HttpClient: HttpClient,private serizer:DomSanitizer) { }

  Isersion(user){
    return this.HttpClient.post<any>(`${environment.myApi}/api/user`,user);
  }

  getAllUsers(){
    return this.HttpClient.get(`${environment.myApi}/api/listerUsers`);
  }

  getEtat(id:number){
    return this.HttpClient.get(`${environment.myApi}/api/users/status/${id}`);
  }

  DecodeImage(user){
    return this.serizer.bypassSecurityTrustResourceUrl(`data:image/png;base64,${user.photo}`)
  }

  suppression(id:number){
    return this.HttpClient.delete(`${environment.myApi}/api/delete/${id}`);
  }
}                                                                                                                                                                               
