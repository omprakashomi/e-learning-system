import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CourseDetailsService } from 'src/app/service/course-details.service';

@Component({
  selector: 'app-courses-enroll',
  templateUrl: './courses-enroll.component.html',
  styleUrls: ['./courses-enroll.component.css']
})
export class CoursesEnrollComponent implements OnInit {

  constructor(private param:ActivatedRoute, private service:CourseDetailsService,
    private _sanitizer:DomSanitizer) { }
  getCourseId:any;
  courseData:any;
  course:any;
  videoIcon:string='../../../assets/play.png';
  play:string='play';
  videodisable:boolean=true;
  
  

  ngOnInit(): void {
    this.getCourseId=this.param.snapshot.paramMap.get('id');
    if(this.getCourseId){
      this.courseData=this.service.getAll().filter((value)=>{
        return value.id == this.getCourseId;

      })
     
    }

    this.course=this.service.getAll;
  }
  changeImg(){
    if(this.play=="play"){
      this.play="pause",
      this.videoIcon='../../../assets/pause-button.png'
      this.videodisable=false
    }
    else{
      this.videoIcon='../../../assets/play.png';
      this.play="play";
      this.videodisable=true

    }
  }

  

}
