import { Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { JuegoComponent } from './components/juego/juego.component';

export const routes: Routes = [
    {
        path:'menu',
        component:MenuComponent
    },
    {
        path:'categorias',
        component:CategoriasComponent
    },
    {
        path:'juego',
        component:JuegoComponent
    },
    {
        path:'**',
        redirectTo:'menu',
        pathMatch:'full'
    }
];
