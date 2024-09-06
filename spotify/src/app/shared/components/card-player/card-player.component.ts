import { Component, Input, input } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css'
})
export class CardPlayerComponent {
  @Input() modeIn: 'small' | 'big' = 'big';
  @Input() trackIn!: TrackModel;

}
