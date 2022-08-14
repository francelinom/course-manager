import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StarModule } from '../shared/components/star/star.module';
import { AppPipeModule } from '../shared/pipe/app-pipe.module';
import { CourseInfoComponent } from './course-info/course-info.component';
import { CourseListComponents } from './course-list.component';

@NgModule({
  declarations: [CourseListComponents, CourseInfoComponent],
  imports: [
    FormsModule,
    CommonModule,
    StarModule,
    AppPipeModule,
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
