import { Component, Input, Output, EventEmitter, OnInit, Inject } from '@angular/core';
import { TestsResourceService } from 'src/app/tests/resources/tests.service';
import { ITest } from '../../models/ITest';
import { IAnswer } from '../../models/IAnswer';
import { UserAuthResourceService } from 'src/app/user-auth/resources/user-auth.service';
import { ITokenWithEmail } from 'src/app/user-auth/models/ITokenWithEmail';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-passing-test',
  templateUrl: './passing-test.component.html',
  styleUrls: ['./passing-test.component.css']
})
export class PassingTestComponent implements OnInit {
  @Input() test!: ITest;

  @Output() newCurrentResultEvent = new EventEmitter<number>();

  public authOptions: ITokenWithEmail = {token: '', email: ''};

  public selectedValues: IAnswer[] = [];

  public answers: IAnswer[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ITest,
    private userAuthService: UserAuthResourceService,
    private serverService: TestsResourceService
    ) {
      this.test = data;
    }

  ngOnInit() : void {

    this.onChangeAuthOptions();

    this.changeSelectedValuesLength();
  }

  public onTestSubmit(){

    this.serverService.postTestResultWithId(this.authOptions, this.test.id, this.selectedValues)
      .subscribe(result => {
        this.test.result = result;

        this.newCurrentResultEvent.emit(this.test.result);
      });
  }

  public onChangeAuthOptions(){

    this.userAuthService.authOptions$
      .subscribe(options => this.authOptions = options);
  }

  private changeSelectedValuesLength(){
    this.selectedValues.length = this.test.questions.length;
  }

}
