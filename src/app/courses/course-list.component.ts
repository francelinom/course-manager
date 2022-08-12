import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
})
export class CourseListComponents implements OnInit {
  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Anuglar',
        imageUrl: '/assets/images/forms.png',
        price: 99.99,
        code: 'XPTO',
        duration: 120,
        rating: 5.4,
        releaseDate: 'december, 2, 2021',
      },
      {
        id: 2,
        name: 'Anuglar 13',
        imageUrl: '/assets/images/http.png',
        price: 199.99,
        code: 'XYZ',
        duration: 120,
        rating: 5.9,
        releaseDate: 'december, 20, 2021',
      },
    ];
  }
}
