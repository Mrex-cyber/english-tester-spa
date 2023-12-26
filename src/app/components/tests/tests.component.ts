import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ITest } from 'src/app/models/ITest';
import { ServerConnectionService } from 'src/app/services/server-connection.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent {
  public title: string = "Tests";
  public tests: ITest[] = [];
  public selectedTest?: ITest;
  public lastResult: string = "No result";

  constructor(private serverService: ServerConnectionService) { }

  public changeTestResult(newResult: number){
    this.selectedTest!.result = newResult;
    this.lastResult = newResult.toString();
  }

  public onSelectTest(test: ITest): void {
    this.selectedTest = test;
  }

  public getTests(): void{
    this.serverService.getTests().subscribe(tests => this.tests = tests);
  }
}
