import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import axios from 'axios';

@Injectable()
export class BuscaProvider {
    token: String;

  constructor(public http: Http) {
      this.token="BQCLFXVQ6iKFQeq44jcf-SmLcABzhIHB8Yw_DRwys6WUGVuWHYemLyfR45MEX9gsRqdS8G5qIJRewAYUzwA"
  }
  all = function(text){
    return axios({
        url: 'https://api.spotify.com/v1/search',
        method: 'get',
        params: {
            "q":text,
            "type":"artist,track,album"
        },
        headers: {
            "Authorization":"Bearer " + this.token,
        },
    })
        
  }
  track = function(id){
    return axios({
        url: 'https://api.spotify.com/v1/me/player/devices',
        method: 'get',
        headers: {
            "Authorization":"Bearer " + this.token,
        },
    })
        
  }
  album = function(id){
    return axios({
        url: 'https://api.spotify.com/v1/albums/'+id,
        method: 'get',
        params: {
            "id":id
        },
        headers: {
            "Authorization":"Bearer " + this.token,
        },
    })
        
  }

}
