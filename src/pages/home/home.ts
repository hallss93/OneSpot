import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BuscaPage } from '../busca/busca';
import { LoginPage } from '../login/login';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  search(){
    this.navCtrl.setRoot(BuscaPage);    
  }
  close(){
    this.navCtrl.setRoot(LoginPage);
  }
}
