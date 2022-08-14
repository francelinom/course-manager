import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseListComponents } from './courses/course-list.component';
import { StarComponent } from './star/star.component';

@NgModule({
  declarations: [AppComponent, CourseListComponents, StarComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
