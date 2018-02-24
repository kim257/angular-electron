import {Component} from '@angular/core';
import {ElectronService} from "../../providers/electron.service";
import {Router} from "@angular/router";
import {ShareService} from "../pdf/share.service";

@Component({
  selector: 'app-pdf-template',
  templateUrl: './pdf-template.component.html',
  styleUrls: ['./pdf-template.component.scss']
})
export class PdfTemplateComponent {

  public mocks = [{
    subjectFitst: [
      {
        name: 'ภาษาไทย',
        id: 'ds123',
        score: 77,
        grade: 3.5,
        credit: 3
      }
    ],
    subjectSecond: [
      {
        name: 'หน้าที่พลเมือง',
        id: 'as132',
        score: 99,
        grade: 4,
        credit: 3
      }
    ],
    subjectThird: [
      {
        name: 'แนะแนว',
        id: '',
        score: 0,
        grade: 0,
        credit: 1
      }
    ],
    total: {
      score: 176,
      credit: 6,
      maxScore: 200,
      grade: 3.75,
      percentage: '75%',
      rank: 1,
      studentCound: 2
    },
    information: {
      semester: '1',
      year: '2560',
      class: '5',
    },
    student: {
      id: '8',
      titleName: 'เด็กชาย',
      firstName: 'ภูมินทร์',
      lastName: 'ออมสิน'
    }
  }];
  public datas: any;

  constructor(private electronService: ElectronService,
              private router: Router,
              private shareService: ShareService) {
    this.datas = this.shareService.convertToPDFFormat(
      JSON.parse(localStorage.getItem('students')),
      JSON.parse(localStorage.getItem('subjects')),
      JSON.parse(localStorage.getItem('info'))
    );
    if (!this.datas) {
      return;
    }
    this.electronService.createPdf();
    setTimeout(() => {
      this.router.navigate(['pdf']);
    }, 2000);
  }
}
