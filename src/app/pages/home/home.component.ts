import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/app/courses';
import { CourseDetailsService } from 'src/app/service/course-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:CourseDetailsService) { }
  course:Courses[]=[];
  ngOnInit(): void {
    this.course=this.service.getAll();
  }

}
