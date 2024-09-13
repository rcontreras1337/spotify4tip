import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import * as dataRaw from '../../../data/tracks.json';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  // Cuando son observables se les pone un signo dolar
  // Utiliza operadores
  mockTracksListApi$: Observable<TrackModel[]> = of([]);
  constructor() {
    const { data }: any = (dataRaw as any).default;
    this.mockTracksListApi$ = of(data);
  }
}


// el operador nex de RxJs esta constantemente pendiente de los nuevos cambios
// eventos, lo que provoca una actualización en tiempo real
