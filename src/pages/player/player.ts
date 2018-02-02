import {Component, Provider} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BuscaProvider } from '../../providers/Spot/busca';
import { AudioProvider } from 'ionic-audio';

@IonicPage()
@Component({
  selector: 'page-player',
  templateUrl: 'player.html',
})
export class PlayerPage {
  track: any;
  img:any;
  myTracks: any[];
  allTracks: any[];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public busca: BuscaProvider,
              private _audioProvider: AudioProvider) {
                this.track=[]
    this.track = this.navParams.get('musica');
    console.log(this.track)
    // this.get()
    this.myTracks = [{
      src: 'https://archive.org/download/JM2013-10-05.flac16/V0/jm2013-10-05-t12-MP3-V0.mp3',
      artist: 'John Mayer',
      title: 'Why Georgia',
      art: 'img/johnmayer.jpg',
      preload: 'metadata'
    }];
    var that=this;
    this.img=this.track.album.images[0].url
      setTimeout(function() {
        var divs = document.querySelectorAll('time'), i;
        divs[1].style.right = "0px";
      }, 1000);
  }
  ngAfterContentInit() {
    this.allTracks = this._audioProvider.tracks; 
  }
  playSelectedTrack() {
    this._audioProvider.play(this.myTracks[0]);
  }
  pauseSelectedTrack() {
     this._audioProvider.pause(this.myTracks[0]);
  } 
}
