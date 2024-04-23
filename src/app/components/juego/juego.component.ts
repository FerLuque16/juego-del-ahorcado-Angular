import { Component } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-juego',
  standalone: true,
  imports: [],
  templateUrl: './juego.component.html',
  styleUrl: './juego.component.css'
})
export class JuegoComponent {

  categorias = {
    capitales: ["Buenos Aires", "Washington D.C.", "París", "Tokio", "Canberra"],
    paises: ["Argentina", "Estados Unidos", "Francia", "Japón", "Australia"],
    series: ["Game of Thrones", "Stranger Things", "Breaking Bad", "Friends", "The Mandalorian"],
    peliculas: ["The Shawshank Redemption", "Inception", "The Godfather", "Pulp Fiction", "The Dark Knight"],
    animales: ["Perro", "Gato", "León", "Elefante", "Tigre"]
  }

  palabra = ['a','r','g','e','n','t','i','n','a'];

  letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m","n",
            "ñ","o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

            
  constructor(private categoriaService: CategoriaService) {
    console.log(categoriaService.getCategoria());
  }




}
