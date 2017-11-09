import { Component } from '@angular/core';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent {
  // code! : string
  // name  : string
  // unit  : string
  // isJustPass : boolean
  public subjectAllList = {
      mainList: [],
      additionalList: [],
      otherList: []
  }

  constructor() { }



}
