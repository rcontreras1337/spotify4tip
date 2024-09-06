import { Component, Input } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrl: './section-generic.component.css'
})
export class SectionGenericComponent {

  @Input() titleInHijo: string = 'Title';
  // Indicamos que solo puede ser small o big nada más
  @Input() modeInHijo: 'small' | 'big' = 'big';
  @Input() dataTracksInHijo: Array<TrackModel> = [];


}
