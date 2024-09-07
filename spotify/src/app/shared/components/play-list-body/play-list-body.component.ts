import { Component } from '@angular/core';
import * as dataRaw from '../../../data/tracks.json';
import { TrackModel } from '@core/models/tracks.model';


@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrl: './play-list-body.component.css'
})
export class PlayListBodyComponent {
  tracks: TrackModel[] = [];
  optionSort: { property: keyof TrackModel | null, order: string } = { property: 'name', order:'asc' };
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const { data }: any = (dataRaw as any).default;
    this.tracks = data;
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
