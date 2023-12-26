import { Component, OnInit, Input, ElementRef, ViewChildren, QueryList, Output, EventEmitter } from '@angular/core';
import { ITest } from 'src/app/models/ITest';
import { ServerConnectionService } from 'src/app/services/server-connection.service';

@Component({
  selector: 'app-passing-test',
  templateUrl: './passing-test.component.html',
  styleUrls: ['./passing-test.component.css']
})
export class PassingTestComponent {
  @Input() set test(value: ITest) {
    if (value){
      this._test = value;
    }
  }
  get test():ITest{
    return this._test;
  }
  private _test!: ITest;

  @Output() newCurrentResultEvent = new EventEmitter<number>();
  @ViewChildren('selectedItem') selectedItem: QueryList<ElementRef> | undefined;

  constructor(private serverService: ServerConnectionService) { }

  public onSubmit(){
    const selectedItem: ElementRef[] = this.selectedItem!.toArray();
    selectedItem.forEach((item:ElementRef, i:number) => {
      if (item.nativeElement.value === this.test.questions[i].rightAnswer) {
        this.test.result++;
      }
    });

    this.test.finished = true;

    this.newCurrentResultEvent.emit(this.test.result);
    this.serverService.postTestResultWithId(this.test.id, this.test.result).subscribe();
  }
}
