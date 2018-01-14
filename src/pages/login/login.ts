import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { HomePage } from '../home/home';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  headers = new Headers()
  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams) {
  }
  login(){
    this.navCtrl.setRoot(HomePage);
  }
}
