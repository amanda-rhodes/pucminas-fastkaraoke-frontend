import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApplicationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApplicationProvider {

  serverUrl = "https://fast-karaoke.herokuapp.com";

  constructor(public http: HttpClient) {}

  getMusicas() {
    return this.http.get<any>(`${this.serverUrl}/musica/`);
  }

  getPedidos() {
    return this.http.get<any>(`${this.serverUrl}/pedido/all`);
  }

  getProximoPedido() {
    return this.http.get<any>(`${this.serverUrl}/pedido`);
  }

}
