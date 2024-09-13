import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { SearchService } from '@modules/history/services/search.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css'
})
export class HistoryPageComponent {
  listResults: TrackModel[] = [];

  constructor(private sarchService: SearchService){}

  recibirData(event: string):void {
    console.log('estoy en el padre', event);
    this.sarchService.searchTracks$(event)
      .subscribe(({ data }) => {
        console.log('prueba', data);
        this.listResults = data;
      });
  }


}
