import { Component, OnInit } from '@angular/core';
import { ITest } from 'src/app/models/ITest';
import { ServerConnectionService } from 'src/app/services/server-connection.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {
  tests: ITest[] = [];
  selectedTest?: ITest;
  constructor(private serverService: ServerConnectionService) { }
  onSelectTest(test: ITest): void {
    this.selectedTest = test;
  }
  ngOnInit() {
  }
  getTests(): void{
    this.serverService.getTests().subscribe(tests => this.tests = tests);
  }
}
