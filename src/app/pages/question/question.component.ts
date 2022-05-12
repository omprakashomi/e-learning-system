import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

import { CourseCartService } from 'src/app/service/course-cart.service';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

   
  constructor(private quetionservice:CourseCartService) { }
 questions:any=[];
 currentQuetions:number=0;
  name:string="";
  message!:string
  public points:number=0;
  counter=60;
  public correctAnswer:number=0;
  incorrectAns:number=0;
  interval$:any
  progress:string="0";

  isQuizeComplet:Boolean=false;

  ngOnInit(): void {
    this.name=localStorage.getItem("name")!;
    this.getAllQuestion();
    this.startCounter();
    
  }

    getAllQuestion(){
    this.quetionservice.getQuetionJson()
    .subscribe(
      (res:any)=>{
        this.questions=res;
      }
  
    )};
    nextQuestion(){
      this.currentQuetions++;
    }
    privouseQuestion(){
      this.currentQuetions--;
    }

    answer(currentQNo:number,option:any){
      if(currentQNo=== this.questions.length){
        this.isQuizeComplet=true;
        this.stopCounter();
      }
      if(option.isCorrect){
        this.points+=10;
        this.correctAnswer++;
        setTimeout(()=>{
          this.currentQuetions++;
          this.resetCounter();
          this.getProgressbar();
        },1000);
       
      }
      else{
        setTimeout(()=>{
          this.currentQuetions++;
          this.incorrectAns++;
          this.resetCounter();
          this.getProgressbar();
        },1000);
     this.points-=10;
     
      }
    }
    startCounter(){
      this.interval$=interval(1000)
      .subscribe(val=>{
        this.counter--;
        if(this.counter===0){
          this.currentQuetions++;
          this.counter=60;
          this.points-=10;
        }
      });
      setTimeout(()=>{
        this.interval$.unsubscribe()
      },600000);

    }
    stopCounter(){
      this.interval$.unsubscribe();
      this.counter=0;

    }
    resetCounter(){
  this.stopCounter();
  this.counter=60;
  this.startCounter();
    }
    resetQuize(){
      this.resetCounter();
      this.getAllQuestion();
      this.points=0;
      this.counter=60;
      this.currentQuetions=0;
      this.progress="0";
     
    }

    getProgressbar(){
      this.progress=((this.currentQuetions/this.questions.length)*100).toString();
      return this.progress;
    }

}
