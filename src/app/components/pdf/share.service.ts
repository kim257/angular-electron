import {Injectable} from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class ShareService {

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
      director: 'A',
      teacher: 'B'
    },
    student: {
      id: '8',
      titleName: 'เด็กชาย',
      firstName: 'ภูมินทร์',
      lastName: 'ออมสิน'
    }
  }];

  public convertToPDFFormat(students, subjects, info) {

    const datas = [];
    _.forEach(students, (element) => {
      console.info('element >>', element);
      let totalScore = 0;
      let totalCredit = 0;
      let totalMaxScore = 0;
      let totalGrade = 0;

      let subjectFitst = [];
      let subjectSecond = [];
      _.forEach(element.score, (score) => {
        totalScore += score.score;
        totalMaxScore += 100;
        totalCredit += score.credit;
        totalGrade += this.checkGrade(score.score);
        _.set(score, 'grade', this.checkGrade(score.score));
        (score.type === 0) ? subjectFitst.push(score) : subjectSecond.push(score);
      });
      datas.push({
        subjectFitst: subjectFitst,
        subjectSecond: subjectSecond,
        subjectThird: subjects[2],
        information: info,
        student: element,
        total: {
          score: totalScore,
          credit: totalCredit,
          maxScore: totalMaxScore,
          grade: _.round(totalGrade / _.size(element.score)),
          percentage: _.round(((totalScore / totalMaxScore) * 100), 2) + ' %',
          studentCound: _.size(students)
        }
      })
    });
    return _.reverse(_.sortBy(datas, ['total.score']));
  }


  public checkGrade(number: number) {
    let grade = 0;
    if (number > 79) {
      grade = 4;
    } else if (number > 74) {
      grade = 3.5;
    } else if (number > 69) {
      grade = 3;
    } else if (number > 64) {
      grade = 2.5;
    } else if (number > 59) {
      grade = 2;
    } else if (number > 54) {
      grade = 1.5;
    } else if (number > 49) {
      grade = 1;
    } else {
      grade = 0;
    }
    return grade;
  }

}
