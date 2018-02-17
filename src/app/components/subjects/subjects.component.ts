import {Component} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent {
  // basic = 0
  // additional = 1
  // extra = 2
  // วิชา object to string JSON.stringify(obj);
  // วิชา string to object JSON.parse('{ "name":"John", "age":30, "city":"New York"}')

  TYPE_OF_SUBJECTS = ['วิชาพื้นฐาน', 'วิชาเพิ่มเติม', 'กิจกรรมพัฒนาฯ'];
  subjectsList: any;

  constructor() {
    if (_.isEmpty(localStorage.getItem('subjects'))) {
      this.subjectsList = [
        [
          {
            id: '',
            name: '',
            credit: '1',
          }],
        [{
          id: '',
          name: '',
          credit: '1',
        }],
        [{
          id: '',
          name: '',
          credit: '1'
        }]
      ];
    } else {
      this.subjectsList = JSON.parse(localStorage.getItem('subjects'));
    }
  }

  addSubject(indexType) {
    this.subjectsList[indexType].push({
      id: '',
      name: '',
      credit: '1',
    })
  }

  remove(indexType, indexSubject) {
    this.subjectsList[indexType].splice(indexSubject, 1);
  }

  save() {
    localStorage.setItem('subjects', JSON.stringify(this.subjectsList))
  }
}
