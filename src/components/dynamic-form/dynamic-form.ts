import { QuestionControlService } from '../../app/question-control-service';
import { Component , Input} from '@angular/core';
import { QuestionBase } from "../../app/models/question";
import { FormGroup }   from '@angular/forms';

@Component({
  selector: 'dynamic-form',
  templateUrl: 'dynamic-form.html',
  providers: [QuestionControlService]
})
export class DynamicFormComponent {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
