import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../../app/models/question';
import { Component , Input } from '@angular/core';


@Component({
  selector: 'dynamic-form-question',
  templateUrl: 'dynamic-form-question.html'
})
export class DynamicFormQuestionComponent {

 @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }

}
