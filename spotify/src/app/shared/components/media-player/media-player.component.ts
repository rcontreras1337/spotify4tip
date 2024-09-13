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

  constructor(public _multimediaService: MultimediaService) { }

  ngOnInit(): void {
    this.getTrackInfo();
  }
  // Se ejecuta al destruir el componente
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
    this.listObservers$.forEach(obs => obs.unsubscribe());
  }

  getTrackInfo() {
    this._multimediaService.trackInfo$.subscribe(
      (res) => {
        console.log("Debo Reproducir 🥡🥡", res);
      }
    );
  }



}
