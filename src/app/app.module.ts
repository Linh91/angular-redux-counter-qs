import { CounterActions } from './app.actions';
import { rootReducer, IAppState, INITIAL_STATE } from './../store';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgReduxModule, NgRedux } from '@angular-redux/store';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule
  ],
  providers: [CounterActions],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    // Tell @angular-redux/store about our rootreducer and our initial state
    // It will use this to create a redux store for us and wire up all the events
    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE);
  }
 }
