import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callBack: EventEmitter<any> = new EventEmitter<any>();

  myObservable1$: Observable<any> = new Observable(
    (observer: Observer<any>) => {

    }
  );

  constructor() { }

}
