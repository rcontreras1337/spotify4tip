import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';

const routes: Routes = [
  {
    path: '', // ESTO ES LA RUTA ROOT osea localhost:4200
    component: ExampleComponent
  },
  {
    path: 'hello', // ESTO ES LA RUTA ROOT osea localhost:4200
    component: ExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
