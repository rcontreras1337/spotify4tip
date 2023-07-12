import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Valores de rutas
const routes: Routes = [
  {
 //    path: '',// cuando es vació le digo que vaya al localhost:4200/
 //   component: //indica el componente para que lo importe
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
