import { Injectable } from '@angular/core';
import { Contato } from './contato';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  url = 'http://localhost:3003/api/contato'
  axios = axios;

  constructor(private http: HttpClient) {
  }

  insert(contato: Contato) {
    this.axios.post(this.url + '/', contato);
    location.reload();
  }

  update(contato: Contato, key: string) {
    this.axios.put(this.url + '/' + key, contato);
    location.reload();
  }

  getAll() {
    return this.http.get<Contato[]>(this.url + '?sort=nome');
  }

  delete(key: string) {
    this.axios.delete(this.url + '/' + key);
  }
}
