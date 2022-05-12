import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Courses } from 'src/app/courses';


import { CourseDetailsService } from 'src/app/service/course-details.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private service:CourseDetailsService,private route:ActivatedRoute ) { }
  course:Courses[]=[]

 
  
  

  ngOnInit(): void {
    this.course=this.service.getAll();
   
   


      this.route.params.subscribe(params=>{
        if(params.searchTerm)
        {
          this.course=this.service.getAll().filter(courses=>
            courses.courseName.toLowerCase().includes(params.searchTerm.toLowerCase())
          );
          
        }
        else{
          this.course=this.service.getAll();
        }
      });
    
  }
 
}






function OutPut() {
  throw new Error('Function not implemented.');
}

