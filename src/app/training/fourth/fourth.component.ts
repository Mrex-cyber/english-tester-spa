import { Component, OnInit } from '@angular/core';
import { Subject, Subscription, interval, takeUntil } from 'rxjs';
import { EventControllerService } from '../event-controller.service';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {
  public data: number[] = [1, 1, 1];

  private subscribe = new Subscription();

  constructor(private eventController: EventControllerService) { }

  ngOnInit() {
  }

  submitData(values: string){
    this.eventController.changeFirst(values.split(' ').map(v => parseInt(v)));
  }

  subscribeToData(){
    this.subscribe = this.eventController.data2.subscribe(values => this.data = values);
  }

  unsubscribeToData(){
    this.subscribe.unsubscribe();
  }
}
