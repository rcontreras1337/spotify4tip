import { Component, OnDestroy } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnDestroy{

  listObservers$: Array<Subscription> = [];

  constructor(private _multimediaService: MultimediaService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const observable1$: Subscription = this._multimediaService.callBack.subscribe(
      (response: TrackModel) => {
        console.log('recibiendo track...', response);
      }
    );

    //Agrega todos los que uses
    this.listObservers$ = [observable1$,];
  }
  // Se ejecuta al destruir el componente
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
    this.listObservers$.forEach(obs => obs.unsubscribe());
  }



}
