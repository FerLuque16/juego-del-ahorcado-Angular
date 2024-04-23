import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  categoria = '';

  constructor() { }

  setCategoria(categoria: string){
    this.categoria = categoria;
  }

  getCategoria(){
    return this.categoria;
  }
}
