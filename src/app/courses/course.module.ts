import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReplacePipe } from '../pipe/replace.pipe';
import { StarComponent } from '../star/star.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { CourseListComponents } from './course-list.component';

@NgModule({
  declarations: [
    CourseListComponents,
    CourseInfoComponent,
    ReplacePipe,
    StarComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: 'courses',
        component: CourseListComponents,
      },
      {
        path: 'courses/info/:id',
        component: CourseInfoComponent,
      },
    ]),
  ],
})
export class CourseModule {}
