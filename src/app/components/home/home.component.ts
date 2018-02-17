import {Component} from '@angular/core';
import {ElectronService} from "../../providers/electron.service";

import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  info: object;

  constructor(private electronService: ElectronService) {
    if (_.isEmpty(localStorage.getItem('info'))) {
      this.info = {
        semester: '',
        year: '',
        class: '',
        director: '',
        teacher: ''
      };
    } else {
      this.info = JSON.parse(localStorage.getItem('info'));
    }
  }

  save() {
    localStorage.setItem('info', JSON.stringify(this.info))
  }
}
