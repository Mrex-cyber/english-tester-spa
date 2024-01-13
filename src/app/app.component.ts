import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  n1: number[] = [1, 2, 3];
  n2: number[] = [4, 5, 6];

  public firstEvent(values: number[]){
    this.n1 = values;
  }

  public secondEvent(values: number[]){
    this.n2 = values;
  }
}
