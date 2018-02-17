import {Component} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {


  studentList: any;

  constructor() {
    if (_.isEmpty(localStorage.getItem('students'))) {
      this.studentList = [
        {
          id: '',
          titleName: '',
          firstName: '',
          lastName: ''
        }];
    } else {
      this.studentList = JSON.parse(localStorage.getItem('students'));
    }
  }

  addStudent() {
    this.studentList.push({
      id: '',
      titleName: '',
      firstName: '',
      lastName: ''
    })
  }

  remove(index) {
    this.studentList.splice(index, 1);
  }

  save() {
    localStorage.setItem('students', JSON.stringify(this.studentList))
  }
}
