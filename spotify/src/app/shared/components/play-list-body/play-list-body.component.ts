import { Component, Input } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { SearchService } from '../../../modules/history/services/search.service';


@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrl: './play-list-body.component.css'
})
export class PlayListBodyComponent {
  @Input() tracks: TrackModel[] = [];
  optionSort: { property: keyof TrackModel | null, order: string } = { property: 'name', order:'asc' };
  constructor( private _searchService: SearchService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }


  changeSort(property: keyof TrackModel): void {
    //Uso la destructuracion para sacar el sort
    const { order } = this.optionSort;
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc':'asc',
    }
  }

}
