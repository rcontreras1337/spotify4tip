import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';

//Valores de rutas
const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import(`./modules/auth/auth.module`).then(m => m.AuthModule)
  },
  {
 //    path: '',// cuando es vació le digo que vaya al localhost:4200/
 //   component: //indica el componente para que lo importe
  component: HomePageComponent,
  path: '',
  loadChildren: () => import(`./modules/home/home.module`).then(m => m.HomeModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
