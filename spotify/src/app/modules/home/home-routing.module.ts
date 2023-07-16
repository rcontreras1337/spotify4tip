import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    //path: ':username', // para llegar a esta ruta se concatena, ruta padre(app-routing) y hija, en ese caso
    // le estaríamos pasando un parámetro llamado username, de esta forma cuando escribamos, cualquier cosa
    // en la url nos mandara a aca, homepageComponent, puesto que espera ese parámetro en la url
    path: '',
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
