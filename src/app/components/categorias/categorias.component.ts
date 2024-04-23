import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {

  constructor(private router: Router, private categoriaService: CategoriaService){

  }

  enviarCategoria(categoria: string){
    this.categoriaService.setCategoria(categoria);
    this.router.navigate(['/juego']);
  }

}
