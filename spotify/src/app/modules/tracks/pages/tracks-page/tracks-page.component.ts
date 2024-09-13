import { Component, OnDestroy } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
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


    this.subscribirseTracks();
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe());
  }

  subscribirseTracks(): void {

  }



}
