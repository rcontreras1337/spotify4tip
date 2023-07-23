import { Component, Input } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent {

  @Input() mode: 'small' | 'big' = 'small';
  // el signo de exclamación nos permite declarar el objeto sin inicializar
  // solo cuando estemos seguros de que no vendrá vació
  // @Input() track!: TrackModel;
  @Input() track: TrackModel = {_id:0,album:'',cover:'',name:'',url:''};

  constructor(){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

}
