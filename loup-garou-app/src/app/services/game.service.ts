import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Joueur } from '../models/joueur.model';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  apiUrl = `https://b91a-34-71-149-173.ngrok-free.app/`;

  constructor(private http: HttpClient) { }

  getStart(): Observable<any> {
    const pseudos = [
      'Ronteah', 'Stun', 'Hugod', 'Chrakos', 'Retweet', 'Clement C', 'Geekswy'
    ];
    const params = new HttpParams().set('players', JSON.stringify(pseudos)).set('roles', JSON.stringify({"loup": 2, "villageois": 5}));
    return this.http.get<any>(this.apiUrl, { params });
  }

  getSwitch(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

}
