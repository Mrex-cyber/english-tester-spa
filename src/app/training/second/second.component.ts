import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  @Input() getData: number[] = [];

  @Output() sendData: EventEmitter<number[]> = new EventEmitter<number[]>;


  constructor() { }

  ngOnInit() {
  }

  submitData(values: string){
    this.sendData.emit(values.split(' ').map(v => parseInt(v)));
  }

}
