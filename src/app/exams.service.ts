import { Injectable, Inject} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ExamsActions } from 'src/redux/examsActions';


@Injectable({
  providedIn: 'root'
})
export class ExamsService{
  appStore: any;
  examsActions: any;
  unsubscribeStore: CallableFunction;
  examResultsSubject: BehaviorSubject<number[]>;

  constructor(
    @Inject('AppStore') appStore: any,
    examsActions: ExamsActions
  ) {
    this.appStore = appStore;
    this.examsActions = examsActions;
    this.examResultsSubject = new BehaviorSubject(this.appStore.getState().exams);

    this.unsubscribeStore = this.appStore.subscribe(
        this.handleStoreUpdate.bind(this));
  }

  handleStoreUpdate() {
    this.examResultsSubject.next(this.appStore.getState().exams);
  }

  getResults(): BehaviorSubject<number[]> {
    return this.examResultsSubject;
  }

  addResult(result: number) {
    const payload = {result};
    this.appStore.dispatch(this.examsActions.addResult(payload));
  }

  removeResult(index: number) {
    const payload = {index};
    this.appStore.dispatch(this.examsActions.removeResult(payload));
  }
}
