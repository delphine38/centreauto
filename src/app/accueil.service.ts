import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AccueilService {
  data!: any;
  mesVoitures!: any[];


  constructor(private http: HttpClient) { }

  getAnnonceDelphine(): Observable<any> {
    return this.http.get<any>('http://localhost:8000/annonce');
  }}
