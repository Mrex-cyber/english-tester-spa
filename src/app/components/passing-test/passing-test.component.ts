import { Component, OnInit, Input } from '@angular/core';
import { ITest } from 'src/app/models/ITest';
import { IQuestion} from 'src/app/models/IQuestion';
import { ServerConnectionService } from 'src/app/services/server-connection.service';

@Component({
  selector: 'app-passing-test',
  templateUrl: './passing-test.component.html',
  styleUrls: ['./passing-test.component.css']
})
export class PassingTestComponent implements OnInit {
   @Input() test: ITest = {
    id: 0,
    title: "-1Title",
    description:"-1Description",
    questions: [],
    finished: false,
    result: 0
  };

  constructor(private serverService: ServerConnectionService) { }

  onSubmit(){
    let answers = document.getElementsByTagName("select");

    const submitButton = document.getElementById("submitBtn");
    submitButton?.remove();


    let answerArray: string[] = [];
    for (let i = 0; i < answers.length; i++){
      answerArray.push(answers[i].value ?? "");
    }
    for (let i = 0; i < this.test.questions.length; i++){
      if (answerArray[i] === this.test.questions[i].rightAnswer) {
        this.test.result++;
        console.log("Increment");
      }
    }
    console.log(this.test.result);
    this.test.finished = true;

    this.serverService.postTestResultWithId(this.test.id, this.test.result).subscribe();
  }
  ngOnInit() {
  }

}
