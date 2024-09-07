import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {
  //Value es lo que entra al pipe

  transform(value: TrackModel[], args: keyof TrackModel | null = null, sort: string = ''): TrackModel[] {
    // console.log(value);
    // console.log(args);
    // console.log(sort);
    // return [];
    try {
      if (args === null) return value;
      const tmpList = value.sort((a, b) => {
        const aValue = a[args];
        const bValue = b[args];
        if (aValue === undefined || bValue === undefined) {
          return 0; // Si alguna de las propiedades es undefined, las consideramos iguales
        }

        if (aValue < bValue) {
          return -1;
        }
        else if (aValue === bValue) {
          return 0;
        }
        else if (aValue > bValue) {
          return 1;
        }
        return 1;
      });

      return (sort === 'asc') ? tmpList : tmpList.reverse();
    } catch (e) {
      console.log('Ocurrió un error');
      return value;
    }
  }

}
