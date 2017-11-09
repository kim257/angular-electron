import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from "./components/students/students.component";
import { SubjectsComponent } from "./components/subjects/subjects.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },{
        path: 'student',
        component: StudentsComponent
    },{
        path: 'subject',
        component: SubjectsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
