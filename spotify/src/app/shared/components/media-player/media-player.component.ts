import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnDestroy{
  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('');
  listObservers$: Array<Subscription> = [];
  state: string = 'paused';

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
    const observer1$ = this._multimediaService.playerStatus$
      .subscribe(status => this.state = status)
    this.listObservers$ = [observer1$]
  }

  handlePosition(event: MouseEvent): void {
    const elNative: HTMLElement = this.progressBar.nativeElement
    const { clientX } = event
    const { x, width } = elNative.getBoundingClientRect()
    const clickX = clientX - x //TODO: 1050 - x
    const percentageFromX = (clickX * 100) / width
    console.log(`Click(x): ${percentageFromX}`);
    this._multimediaService.seekAudio(percentageFromX)

  }



}
