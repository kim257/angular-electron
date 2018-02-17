import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import 'polyfills';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {HttpClient, HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
// NG Translate
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {ElectronService} from './providers/electron.service';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {SubjectsComponent} from './components/subjects/subjects.component';
import {StudentsComponent} from './components/students/students.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {PdfComponent} from "./components/pdf/pdf.component";
import {PdfValueService} from "./providers/pdf-value.service";
import {PdfTemplateComponent} from './components/pdf-template/pdf-template.component';
import {ShareService} from "./components/pdf/share.service";

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SubjectsComponent,
    StudentsComponent,
    PdfComponent,
    PdfTemplateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
  ],
  providers: [ElectronService, PdfValueService, ShareService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
