import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callBack: EventEmitter<any> = new EventEmitter<any>();
  // myObservable1$: Subject<any> = new Subject();
  myObservable1$: BehaviorSubject<any> = new BehaviorSubject('');

  // myObservable1$: Observable<any> = new Observable(
  //   (observer: Observer<any>) => {
  //     observer.next('♒♒♒♒♒')
  //   }
  // );

  constructor() {
    this.myObservable1$.next('♒♒♒♒♒');

  }

}
