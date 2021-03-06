import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { AngularFireModule,AuthProviders, AuthMethods } from 'angularfire2';
// import {HTTP_PROVIDERS} from 'angular2/http';


import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';

import { HomepageRoutingModule }         from './homepage/homepage-routing.module';
import { LoginRoutingModule }   from './login-routing.module';
import { LoginComponent }       from './login.component';
import { HomepageComponent } from './homepage/homepage.component';

import { DialogService }        from './dialog.service';



// import {SearchFactory} from '../services/SearchFactory';
// import {PlaylistService} from '../services/PlaylistService';
// import {SoundCloudSearch} from '../services/SoundCloudSearch';
// import {SoundCloudPlayer} from '../services/SoundCloudPlayer';
// import {SoundManagerSoundPlayer} from '../services/SoundManagerSoundPlayer';
// import {SoundManager} from '../services/SoundManager';
// import {PlayerCmp} from '../player/Player';
// import {TabListCmp} from '../tabList/TabList';
// import {LocalStorage} from '../services/LocalStorage';




export const myFirebaseConfig = {

  apiKey: "AIzaSyCleNPTW1m0VsF2V_sSuYJQ1pm5E356Ra8",
    authDomain: "amazing-me-ac8b6.firebaseapp.com",
    databaseURL: "https://amazing-me-ac8b6.firebaseio.com",
    storageBucket: "amazing-me-ac8b6.appspot.com",
    messagingSenderId: "582459982323"
 
};

const myFirebaseAuthConfig = {
 
      provider: AuthProviders.Password,
      method: AuthMethods.Password,
    
};


@NgModule({
  imports: [
    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig),
    BrowserModule,
    FormsModule,
    HttpModule,
    HomepageRoutingModule,
    LoginRoutingModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,

  ],
  
  providers: [
    DialogService,
 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {


  
}

