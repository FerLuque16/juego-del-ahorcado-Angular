import { Component } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { CommonModule } from '@angular/common';

interface Categorias {
  capitales: string[];
  paises: string[];
  series: string[];
  peliculas: string[];
  animales: string[];
}

@Component({
  selector: 'app-juego',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './juego.component.html',
  styleUrl: './juego.component.css'
})
export class JuegoComponent {

  // categoriaSeleccionada:string ='';
  categoriaSeleccionada:string ='series';

  palabra :string [] = [];
  palabraAAdivinar : string = '';
  palabraAMostrar : string = '';
  listaDePalabras : string[]= [];
  letrasPresionadas : string [] = [];
  intentosRestantes: number = 5;

  letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m","n",
            "ñ","o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  categorias:Categorias = {
    capitales: ["Buenos Aires", "Washington", "París", "Tokio", "Canberra", "Brasilia"],
    paises: ["Argentina", "Estados Unidos", "Francia", "Japón", "Australia"],
    series: ["Game of Thrones", "Stranger Things", "Breaking Bad", "Friends", "The Mandalorian"],
    peliculas: ["Los Vengadores", "Inception", "El padrino", "Pulp Fiction", "The Dark Knight"],
    animales: ["Perro", "Gato", "León", "Elefante", "Tigre"]
  }
  
            
  constructor(private categoriaService: CategoriaService) {
    this.categoriaSeleccionada = categoriaService.getCategoria();
    this.iniciarPalabraMostrada();

  }

  iniciarPalabraMostrada(){
    this.listaDePalabras = this.obtenerListaDePalabras(this.categoriaSeleccionada as keyof Categorias);

    this.palabraAAdivinar = this.listaDePalabras[Math.floor(Math.random() * this.listaDePalabras.length)];

    this.palabraAAdivinar = this.palabraAAdivinar.toLowerCase();

    this.palabraAMostrar = this.palabraAAdivinar.replace(/[a-z]/gi,'_');

  }
  obtenerListaDePalabras(categoria: keyof Categorias){
    return this.categorias[categoria];
  }

  letraSeleccionada(letra:any){
    console.log(this.palabraAMostrar);
    console.log(letra, this.letrasPresionadas, this.palabraAAdivinar);
    if(!this.letrasPresionadas.includes(letra)){
      this.letrasPresionadas.push(letra);
      if(!this.palabraAAdivinar.includes(letra)){
        this.intentosRestantes--;
      }
      else{
        this.actualizarPalabraMostrada();
      }
    }
  }

  actualizarPalabraMostrada(){
    console.log(this.palabraAMostrar);

    // this.palabraAMostrar = this.palabraAAdivinar
    // .split('')
    // .map(letra => this.letrasPresionadas.includes(letra) ? letra : '_')
    // .join('');



    this.palabraAMostrar = this.palabraAAdivinar.split('').map(letra =>{
      if(letra == ' '){
        return ' ';
      }
      else if( this.letrasPresionadas.includes(letra)){
        return letra;
      }
      else{
        return '_';
      }
    }).join('');


    console.log(this.palabraAMostrar);
  }




}
