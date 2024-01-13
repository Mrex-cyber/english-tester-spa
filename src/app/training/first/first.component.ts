import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  @Input() getData: number[] = [];

  @Output() sendData: EventEmitter<number[]> = new EventEmitter<number[]>;


  constructor() { }

  ngOnInit() {
  }

  submitData(values: string){
    this.sendData.emit(values.split(' ').map(v => parseInt(v)));
  }

}
