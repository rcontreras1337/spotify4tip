import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', // Localhost:4200
    //component: solo si no se quiere usar lazy load
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) // Le estamos diciendo que en la ruta '' como promesa cargue el home module solamente
    // al hacer esto, se esta cargando el modulo de home, el que a su vez tiene el archivo de rutas y ahi indicamos las rutas con el component para que se carguen solo los
    // componentes de ese modulo
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
