import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
})
export class CourseInfoComponent implements OnInit {
  course!: Course;
  msg: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.course = this.courseService.retriveById(
      +this.activatedRoute.snapshot.paramMap.get('id')!
    );
  }

  save(): void {
    this.courseService.save(this.course);
    this.msg = 'Course save success!';
  }
}