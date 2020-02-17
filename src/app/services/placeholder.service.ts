import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/user.modelo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceholderService {

  constructor(private httpClient: HttpClient) { }

  async getUsers(): Promise<Usuario[]> {
    let usuarios = await this.httpClient.get<Usuario[]>("https://jsonplaceholder.typicode.com/users").toPromise();
    return usuarios;
  }

  getUsersAlt(): Observable<Usuario[]> {
    let usuariosObservable = this.httpClient.get<Usuario[]>("https://jsonplaceholder.typicode.com/users")
    return usuariosObservable;
  }


}
