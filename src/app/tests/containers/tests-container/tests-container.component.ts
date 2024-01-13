import { Component, OnDestroy, OnInit } from '@angular/core';
import { TestsResourceService } from 'src/app/tests/resources/tests.service';
import { ITest } from '../../models/ITest';
import { UserAuthResourceService } from 'src/app/user-auth/resources/user-auth.service';
import { ITokenWithEmail } from 'src/app/user-auth/models/ITokenWithEmail';
import { MatDialog } from '@angular/material/dialog';
import { PassingTestComponent } from '../../components/passing-test/passing-test.component';
import { Subject, filter, interval, startWith, switchMap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-tests-container',
  templateUrl: './tests-container.component.html',
  styleUrls: ['./tests-container.component.css']
})
export class TestsContainerComponent implements OnInit, OnDestroy {
  public title: string = "Tests";

  public tests: ITest[] = [];

  public selectedTest?: ITest;

  public lastResult: string = "No result";

  private ngUnsubscribe = new Subject<void>();

  private authOptions: ITokenWithEmail = {token: '', email: ''};

  constructor(private testsService: TestsResourceService,
    private userAuthService: UserAuthResourceService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.onChangeAuthOptions();

    this.getTestsPolling();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public changeTestResult(newResult: number){
    this.selectedTest!.result = newResult;
    this.lastResult = newResult.toString();
  }

  public onSelectTest(test: ITest): void {
    this.dialog.open(PassingTestComponent, {
      width: '50%',
      data: test
    });

    this.selectedTest = test;
  }

  public getTestsPolling(): void {
    interval(5000)
      .pipe(
        switchMap(() => this.testsService.getTests()),
        startWith([]),
        filter(tests => tests.length > 0),
        takeUntil(this.ngUnsubscribe)
      )
      .subscribe(tests => this.tests = tests);
  };

  public onChangeAuthOptions(){
    this.userAuthService.authOptions$
      .subscribe(options => {
        this.authOptions = options;

        if (this.authOptions.token !== ''){
          this.testsService.getUserTests(this.authOptions)
            .subscribe(tests => tests.map(test => this.tests.push(test)));
        }
      });
  }

}
