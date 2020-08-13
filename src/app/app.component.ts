import { Component, EventEmitter } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = COURSES

  course = COURSES[1]

  onCourseSelected(course : Course) {
    console.log(course)}

}
