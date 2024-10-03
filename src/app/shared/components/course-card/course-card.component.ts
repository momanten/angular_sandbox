import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { CourseInfo } from '@app/shared/types/course.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {

  @Input() editable:boolean=false;
  @Input() courseInfo!:CourseInfo;
  @Output() clickOnShow = new EventEmitter<string>(); 

  showCourseInfo() {
    this.clickOnShow.emit(this.courseInfo.id);
    console.log('Clicked in course Card')
  }

}
