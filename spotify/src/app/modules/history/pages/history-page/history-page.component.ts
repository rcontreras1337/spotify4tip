import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { SearchService } from '@modules/history/services/search.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css'
})
export class HistoryPageComponent {
  listResults$: Observable<any> = of([]);

  constructor(private sarchService: SearchService){}

  recibirData(event: string):void {
    console.log('estoy en el padre', event);
    this.listResults$ = this.sarchService.searchTracks$(event);
    // this.sarchService.searchTracks$(event)
    //   .subscribe(({ data }) => {
    //     console.log('prueba', data);
    //     this.listResults = data;
    //   });
  }


}
