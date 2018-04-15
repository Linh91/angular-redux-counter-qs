import { IAppState } from './../store';
import { Component, OnDestroy } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { CounterActions } from './app.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Counter app';
  @select() readonly count$: Observable<number>; // saving a reference of observable itself

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: CounterActions) {}

    increment() {
      this.ngRedux.dispatch(this.actions.increment());
    }
    decrement() {
      this.ngRedux.dispatch(this.actions.decrement());
    }
}

// An observable is something that lets you get the latest value of something that changes over time
// Selected observable will recieve new count each time action happens
// $ means an observable of something, rather than a static value
// | async in html will take care of subscribing to count$ and upackig its values as they come in