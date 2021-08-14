import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  decrement,
  increment,
  reset,
} from 'src/app/state/actions/counter.action';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css'],
})
export class CounterPageComponent implements OnInit {
  count: Observable<number>;

  constructor(private store: Store<{ counter: number }>) {
    this.count = store.select('counter');
  }

  ngOnInit(): void {}

  incrementCounter() {
    this.store.dispatch(increment());
  }
  decrementCounter() {
    this.store.dispatch(decrement());
  }
  resetCounter() {
    this.store.dispatch(reset());
  }
}
