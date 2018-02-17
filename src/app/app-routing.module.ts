import {HomeComponent} from './components/home/home.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SubjectsComponent} from "./components/subjects/subjects.component";
import {StudentsComponent} from "./components/students/students.component";
import {PdfComponent} from "./components/pdf/pdf.component";
import {PdfTemplateComponent} from "./components/pdf-template/pdf-template.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'subjects',
    component: SubjectsComponent
  },
  {
    path: 'students',
    component: StudentsComponent
  },
  {
    path: 'pdf',
    component: PdfComponent
  },
  {
    path: 'pdfTemplate',
    component: PdfTemplateComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
