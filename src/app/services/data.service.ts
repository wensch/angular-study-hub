import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSubject = new BehaviorSubject<number>(0);
  data$: Observable<number> = this.dataSubject.asObservable();

  constructor() { }

  upateData(newValue: number) {
    this.dataSubject.next(newValue);
  }
}
