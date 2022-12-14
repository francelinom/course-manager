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
    this.courseService
      .retriveById(+this.activatedRoute.snapshot.paramMap.get('id')!)
      .subscribe({
        next: (course) => (this.course = course),
        error: (err) => console.log('Error:', err),
      });
  }

  save(): void {
    this.courseService.save(this.course).subscribe({
      next: (course) => (this.msg = `course: ${course.name} save success!`),
      error: (err) => console.log('Error: ', err),
    });
  }
}
