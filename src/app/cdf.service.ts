import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CdfService {
  appStore: any;
  unsubscribeStore: CallableFunction;
  cdfSubject: BehaviorSubject<number[]>;

  constructor(
    @Inject('AppStore') appStore: any
  ) {
    this.appStore = appStore;

    const examResults = this.appStore.getState().exams;
    const cdf: number[] = this.calculateCDF(examResults)
    this.cdfSubject = new BehaviorSubject(cdf);

    this.unsubscribeStore = this.appStore.subscribe(
        this.handleStoreUpdate.bind(this));
  }

  handleStoreUpdate() {
    const examResults = this.appStore.getState().exams;
    const cdf: number[] = this.calculateCDF(examResults)
    this.cdfSubject.next(cdf);
  }

  getCdf(): BehaviorSubject<number[]> {
    return this.cdfSubject;
  }

  calculateCDF(result: number): number[] {
    const cdf: number[] = [];
    return cdf;
  }
}
