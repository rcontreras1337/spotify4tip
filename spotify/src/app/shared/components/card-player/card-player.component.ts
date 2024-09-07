import { Component, Input, input } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css'
})
export class CardPlayerComponent {
  @Input() modeIn: 'small' | 'big' = 'big';
  @Input() trackIn!: TrackModel;

  constructor(private _multimediaService: MultimediaService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  sendPlay(track: TrackModel): void{
    // Enviar Canción al reproductor
    this._multimediaService.callBack.emit(track);
  };

}
