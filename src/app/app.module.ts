import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BuscaPage } from '../pages/busca/busca';
import { ListPage } from '../pages/list/list';
import { PlayerPage } from '../pages/player/player';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { BuscaProvider } from './../providers/Spot/busca';

import { IonicAudioModule, WebAudioProvider, CordovaMediaProvider, defaultAudioProviderFactory } from 'ionic-audio';


export function myCustomAudioProviderFactory() {
  return (window.hasOwnProperty('cordova')) ? new CordovaMediaProvider() : new WebAudioProvider();
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BuscaPage,
    PlayerPage,
    ListPage,
    LoginPage
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    IonicAudioModule.forRoot(defaultAudioProviderFactory),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BuscaPage,
    ListPage,
    PlayerPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    BuscaProvider,
    HttpClient,
    SplashScreen
  ]
})
export class AppModule {}
