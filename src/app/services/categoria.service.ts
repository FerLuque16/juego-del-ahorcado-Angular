import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  categoria:any;

  constructor() { }

  setCategoria(categoria: string){
    this.categoria = categoria;
  }

  getCategoria(){
    return this.categoria;
  }
}
