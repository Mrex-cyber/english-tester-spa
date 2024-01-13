import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventControllerService {

  public data1Subject: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
  public data1: Observable<number[]> = this.data1Subject.asObservable();

  public data2Subject: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
  public data2: Observable<number[]> = this.data2Subject.asObservable();

  constructor() { }

  changeFirst(values: number[]): void{
    this.data1Subject.next(values);
  }

  changeSecond(values: number[]): void{
    this.data2Subject.next(values);
  }
}
