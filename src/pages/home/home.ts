import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BuscaProvider } from '../../providers/Spot/busca';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  artistas: any;
  musicas: any;
  albuns: any;
  pesquisa: String;

  constructor(public navCtrl: NavController,
              public busca: BuscaProvider) {
    this.artistas=[];
    this.musicas=[];
    this.albuns=[];
    this.pesquisa="";
  }
  getAlbum(i){
    this.busca.album(i)
    .then(r=>{
      this.albuns=[];
      this.artistas=[];
      console.log(r.data.tracks);
      var temp=r.data.tracks.items;
      for(var i in temp){
        var art=''
        for(var a in temp[i].artists){
          art=temp[i].artists[a].name + " " + art
        }
        this.musicas.push(
          {
            album: temp[i].album,
            artistas:art,
            nome:temp[i].name
          }
        )
      }
    })
  }
  getMusic(t){
    if(this.pesquisa.length>2){
      this.busca.all(this.pesquisa)
      .then(r=>{
        this.artistas=[];
        var temp=r.data.artists.items;
        for(var i in temp){
          if(temp[i].images.length>0){
            var genero=''
            for(var g in temp[i].genres){
              if(temp[i].genres[g]!='')genero=genero+" "
            }
            this.artistas.push(
              {
                nome:temp[i].name,
                imagem: temp[i].images[0],
                genero:genero
              }
            )
          }
        }
        temp=r.data.albums.items;
        for(var i in temp){
          if(temp[i].images.length>0){
            var art=''
            for(var a in temp[i].artists){
              art=temp[i].artists[a].name + " " + art
            }
            this.albuns.push(
              {
                nome: temp[i].name,
                id: temp[i].id,
                imagem: temp[i].images[0],
                artistas:art
              }
            )
          }
        }
        temp=r.data.tracks.items;
        for(var i in temp){
          var art=''
          for(var a in temp[i].artists){
            art=temp[i].artists[a].name + " " + art
          }
          this.musicas.push(
            {
              album: temp[i].album,
              artistas:art,
              nome:temp[i].name
            }
          )
        }
      })
    }
  }
}
