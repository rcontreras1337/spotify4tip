import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: String = 'spotify';
  name: String = 'Ruben Contreras';
  description: String = 'Te Amo WAWA <3 mocha pexoxa! <3 _ <3'
  // status: string | number = 'fail';

  // car: Car = {
  //   brand: 'BWM',
  //   model: 'z4',
  //   year: 2022
  // }
  // car2: Car = {
  //   brand: 'BWM',
  //   model: 'z4',
  // }

  // cars: Array<Car> = [
  //   {
  //     brand: 'MERCEDEZ',
  //     model: 'AMG 200',
  //   },
  //   {
  //     brand: 'BWM',
  //     model: 'z4',
  //     year: 2022
  //   }
  // ];

}

// interface Car {
//   brand: string;
//   model: string;
//   year?: number;
// }
