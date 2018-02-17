import {Injectable} from '@angular/core';

@Injectable()
export class ShareService {


  public convertToPDFFormat(object) {
    console.info('convertToPDFFormat', object);

  }


  public checkGrade(number: number) {
    let grade = '0';
    if (number > 79) {
      grade = '4';
    } else if (number > 74) {
      grade = '3.5';
    } else if (number > 69) {
      grade = '3';
    } else if (number > 64) {
      grade = '2.5';
    } else if (number > 59) {
      grade = '2';
    } else if (number > 54) {
      grade = '1.5';
    } else if (number > 49) {
      grade = '1';
    } else {
      grade = '0';
    }
    return grade;
  }

}
