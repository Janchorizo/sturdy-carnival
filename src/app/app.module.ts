import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { appReducer } from '../redux/appReducer';
import { CDFActions } from '../redux/cdfActions';
import { ExamsActions } from '../redux/examsActions';
import { createStore } from 'redux'

const store = createStore(appReducer);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: 'AppStore', useValue: store },
    CDFActions,
    ExamsActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
