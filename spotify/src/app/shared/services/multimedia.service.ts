import { EventEmitter, Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callBack: EventEmitter<any> = new EventEmitter<any>();
  // myObservable1$: Subject<any> = new Subject();
  // myObservable1$: BehaviorSubject<any> = new BehaviorSubject('');
  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined);
  public audio: HTMLAudioElement;

  // myObservable1$: Observable<any> = new Observable(
  //   (observer: Observer<any>) => {
  //     observer.next('♒♒♒♒♒')
  //   }
  // );

  constructor() {
    this.audio = new Audio();
    this.trackInfo$.subscribe(
      (responseOk) => {
        if (responseOk) {
          this.setAudio(responseOk);
        }
      }
    );

  }

  public setAudio(track: TrackModel) {
    this.audio.src = track.url;
    this.audio?.play();
  }

}
