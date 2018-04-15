import { IAppState } from './../store';
import { Component, OnDestroy } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { CounterActions } from './app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'Counter app';
  count: number;
  subscription;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: CounterActions) {
      this.subscription = ngRedux.select<number>('count')
      .subscribe(newCount => this.count = newCount);
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
    increment() {
      this.ngRedux.dispatch(this.actions.increment());
    }
    decrement() {
      this.ngRedux.dispatch(this.actions.decrement());
    }
}

// An observable is something that lets you get the latest value of something that changes over time
// Selected observable will recieve new count each time action happens
