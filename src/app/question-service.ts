import { Injectable }       from '@angular/core';
import { QuestionBase }     from './models/question';
import { TextboxQuestion }  from './models/question-text';

@Injectable()
export class QuestionService {

  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions() {

    let questions: QuestionBase<any>[] = [

      

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: '',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2,
        required:'true'
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}    