import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL: string = environment.api;

  constructor(private httpClient: HttpClient) { }

  /**
   *
   * @returns devuelve todas las canciones!
   */
  getAllTracks$(): Observable<TrackModel[]>{

    return this.httpClient.get(`${this.URL}/tracks`)
      .pipe(map(
        ({data}: any) => {
          return data;
        }
      ));
  }

  /**
   *
   * @returns devuelve todas las canciones random!
   */
  getAllRamdonTracks$(): Observable<TrackModel[]> {

    return this.httpClient.get(`${this.URL}/tracks`)
      .pipe(
        map(({ data }: any) => { // TODO devolvemos la lista revertida
          return data.reverse();
        }),
        map((dataRevertida) => { // TODO: filtramos por parametros
          return dataRevertida.filter(
            (track: TrackModel) => track._id !== 1
          )
        })
      );
  }

  private skipById(listTracks: TrackModel[] , id: number): Promise<TrackModel[]>{
    return new Promise((resolve, reject) => {
      const listTmp = listTracks.filter( a => a._id != id);
      resolve(listTmp);
    });
  }

}
