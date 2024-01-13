import { Component, OnInit } from '@angular/core';
import { Subject, Subscription, interval, switchMap, takeUntil } from 'rxjs';
import { EventControllerService } from '../event-controller.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  public data: number[] = [1, 1, 1];

  private subscribe = new Subscription();

  constructor(private eventController: EventControllerService) { }

  ngOnInit() {
  }

  submitData(values: string){
    this.eventController.changeSecond(values.split(' ').map(v => parseInt(v)));
  }

  subscribeToData(){
    this.subscribe = this.eventController.data1.subscribe(values => this.data = values);
  }

  unsubscribeToData(){
    this.subscribe.unsubscribe();
  }
}
