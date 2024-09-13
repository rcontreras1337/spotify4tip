import { Component, OnDestroy } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '../../services/track.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent{

  // Cuando los servicios vienen desde HttpCliente como suscripciones
  // Angular de forma automática se des suscribe

  mockTracksList: TrackModel[] = [];
  mockTracksListApi: TrackModel[] = [];

  constructor(private _trackService: TrackService) { }
  ngOnInit(): void {
    this.subscribirseTracks();
    this.subscribirseRandomTracks();
  }


  subscribirseTracks(): void {
    this._trackService.getAllTracks$()
      .subscribe(response => {
        // console.log({ response });
        this.mockTracksList = response;
      }, err => {
        console.log(err);
      });
  }
  subscribirseRandomTracks(): void {
    this._trackService.getAllRamdonTracks$()
      .subscribe(response => {
        // console.log({ response });
        this.mockTracksListApi = response;
      });
  }



}
