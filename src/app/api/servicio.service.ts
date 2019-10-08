import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(public http: HttpClient) { }

  getData(){
    return this.http.get('https://cat-fact.herokuapp.com/facts/random?amount=20');
  }

  getDataPrueba(){
    return this.http.get('assets/prueba.json');
  }
}
