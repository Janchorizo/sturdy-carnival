import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { MarkBreaksActions } from 'src/redux/markBreaksActions';


@Injectable({
  providedIn: 'root'
})
export class MarkBreaksService{
  appStore: any;
  markBreaksActions: any;
  unsubscribeStore: CallableFunction;
  markBreaks: object;
  markBreaksSubject: BehaviorSubject<object>;

  constructor(
    @Inject('AppStore') appStore: any,
    markBreaksActions: MarkBreaksActions
  ) {
    this.appStore = appStore;
    this.markBreaksActions = markBreaksActions;
    const breaks = this.appStore.getState().markBreaks;
    this.markBreaksSubject = new BehaviorSubject(breaks);

    this.unsubscribeStore = this.appStore.subscribe(
        this.handleStoreUpdate.bind(this));
  }

  handleStoreUpdate() {
    const breaks = this.appStore.getState().markBreaks;
    this.markBreaks = breaks;
    this.markBreaksSubject.next(breaks);
  }

  getBreaks(): BehaviorSubject<object> {
    return this.markBreaksSubject;
  }

  calculateMark(score: number): string {
    let mark = 'E';

    const scores = Object.entries(this.markBreaks)
      .sort((a, b) => a < b ? 1 : 0);

    scores.forEach((markBreak: any) => {
      if (score >= markBreak[0]) {
        mark = markBreak[1];
      }
    });

    return mark;
  }
}
