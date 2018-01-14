import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import axios from 'axios';

@Injectable()
export class BuscaProvider {
    token: String;

  constructor(public http: Http) {
      this.token="BQAdKod-JnrMWH_0kuBHWmrUFYATxYZQ9icqngp8bpLdBHyzSxJsDoyDMOagmUPz_6QKUgHyWs1Qykb5wzQ"
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
