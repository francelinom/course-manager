import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
})
export class CourseListComponents implements OnInit {
  filteredCourses: Course[] = [];
  _courses: Course[] = [];
  _filterBy: string = '';
  msg: string = '';

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.retriveAll();
  }

  retriveAll(): void {
    this.courseService.retriveAll().subscribe({
      next: (courses) => {
        this._courses = courses;
        this.filteredCourses = this._courses;
      },
      error: (err) => console.log('Error:', err),
    });
  }

  deleteById(courseId: number): void {
    this.courseService.delete(courseId).subscribe({
      next: (course) => {
        this.msg = `Course delete success!`;
        this.retriveAll();
      },
      error: (err) => console.log('Error: ', err),
    });
  }

  set filter(value: string) {
    this._filterBy = value;

    this.filteredCourses = this._courses.filter(
      (course: Course) =>
        course
          .name!.toLocaleLowerCase()
          .indexOf(this._filterBy.toLocaleLowerCase()) > -1
    );
  }

  get filter() {
    return this._filterBy;
  }
}
