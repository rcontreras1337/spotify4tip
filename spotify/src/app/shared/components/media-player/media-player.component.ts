import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent {

  mockCover: TrackModel = {
    cover: 'https://jenesaispop.com/wp-content/uploads/2009/09/guetta_onelove.jpg',
    album: 'test',
    name: 'hola',
    url: '',
    _id: ''
  }

}
