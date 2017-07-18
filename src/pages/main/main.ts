import { QuestionService } from '../../app/question-service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
  providers: [QuestionService]
})
export class MainPage {
questions: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,service: QuestionService) {
    this.questions=service.getQuestions();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

}
