import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';

const routes: Routes = [
  // Todo lo que este en este nivel va a destruir esas rutas, osea se reiniciaran las vistas
  {
    path:'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(module => module.AuthModule)
  },
  {// Se carga un componente para mostrarse, el homePageComponent, pero ademas
    // se le pasa una carga de modulo, el homeModule, luego en ese llamaremos
    // a los otros módulos, para que este ciclo de vida no se destruya al cambiar en paginas
    path:'',
    component: HomePageComponent,
    loadChildren: () => import('./modules/home/home.module').then(module => module.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
