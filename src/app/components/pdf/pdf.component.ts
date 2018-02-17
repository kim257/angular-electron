import {Component, OnInit} from '@angular/core';
import {ElectronService} from "../../providers/electron.service";
import * as _ from 'lodash';
import {Router} from "@angular/router";

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {

  info: any;
  studentList: any;
  subjectsList: any;
  scoreStudentList: any;
  countBasicAndAdditionalSubject: number;

  constructor(private electronService: ElectronService,
              private router: Router) {

  }

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.studentList = JSON.parse(localStorage.getItem('students'));
    this.subjectsList = JSON.parse(localStorage.getItem('subjects'));
    this.countBasicAndAdditionalSubject = this.subjectsList[0].length + this.subjectsList[1].length;
    this.init();
  }

  init() {
    _.forEach(this.studentList, (element, index) => {
      if (_.isUndefined(this.studentList[index].score)) {
        _.set(this.studentList[index], 'score', []);
      }
      _.forEach(this.subjectsList[0], (firstSubject, indexSubject) => {
        if (_.isUndefined(this.studentList[index].score[indexSubject])) {
          this.studentList[index].score.push(_.cloneDeep(firstSubject));
          _.set(this.studentList[index].score[indexSubject], 'point', '0');
          _.set(this.studentList[index].score[indexSubject], 'type', '0');
        }
      });

      const countListFirstSubject = _.size(this.subjectsList[0]);
      _.forEach(this.subjectsList[1], (secondSubject, indexSubject) => {
        if (_.isUndefined(this.studentList[index].score[indexSubject + countListFirstSubject])) {
          this.studentList[index].score.push(_.cloneDeep(secondSubject));
          _.set(this.studentList[index].score[indexSubject + countListFirstSubject], 'point', '0');
          _.set(this.studentList[index].score[indexSubject + countListFirstSubject], 'type', '1');
        }
      });
    });
    this.save();
    console.info('this.studentList', this.studentList);
    console.info('this.subjectsList', this.subjectsList);
  }


  createPDF() {
    this.router.navigate(['pdfTemplate']);
  }

  save() {
    localStorage.setItem('students', JSON.stringify(this.studentList))
  }
}
