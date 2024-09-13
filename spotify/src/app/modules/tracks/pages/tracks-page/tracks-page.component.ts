import { Component, OnDestroy } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import * as dataRaw from '../../../../data/tracks.json'; // Lo que esta en tracks.json se guarda en data
import { TrackService } from '../../services/track.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnDestroy {

  mockTracksList: TrackModel[] = [];
  mockTracksListApi: TrackModel[] = [];
  listObservers$: Array<Subscription> = [];

  constructor(private _trackService: TrackService) { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const { data }: any = (dataRaw as any).default;
    this.mockTracksList = data;
    this.subscribirseTracks();
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe());
  }

  subscribirseTracks(): void {
    const observerTracks$ = this._trackService.mockTracksListApi$.subscribe(
      response => {
        this.mockTracksListApi = response;
      }
    );
    this.listObservers$ = [observerTracks$];
  }



}
