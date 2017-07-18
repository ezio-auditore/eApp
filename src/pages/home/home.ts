import { MainPage } from '../main/main';
import { Component , ViewChild , trigger,transition,state,animate,keyframes,style} from '@angular/core';
import { NavController ,Slides} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [
  trigger('bounce',[
    state('*',style({
      transform: 'translateX(0)'
    })),
    transition('* => rightSwipe',animate('700ms ease-out',keyframes([
      style({transform: 'translateX(0)', offset: 0}),
      style({transform: 'translateX(-65px)', offset: .3}),
      style({transform: 'translateX(0)', offset: 0})
    ]))),
    transition('* => leftSwipe',animate('700ms ease-out',keyframes([
      style({transform: 'translateX(0)', offset: 0}),
      style({transform: 'translateX(65px)', offset: .3}),
      style({transform: 'translateX(0)', offset: 0})
    ])))
  ])
  ]
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
skipMsg: string = "Skip";
state: string='default';
  constructor(public navCtrl: NavController) {

  }

  skip(){
    this.navCtrl.push(MainPage);
  }
slideChanged(){
  if(this.slides.isEnd()){
    this.skipMsg= 'Alright I got it!';
  }
}
slideMoved(){
  if(this.slides.getActiveIndex() >= this.slides.getPreviousIndex()){
    this.state= 'rightSwipe';
  }
  else{
    this.state= 'rightSwipe';
  }
}
animationDone(){
  this.state='default';
}
}
