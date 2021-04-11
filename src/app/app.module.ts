import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { appReducer } from '../redux/appReducer';
import { CDFActions } from '../redux/cdfActions';
import { ExamsActions } from '../redux/examsActions';
import { createStore } from 'redux';
import { ExamsComponent } from './exams/exams.component';
import { LiquidContainerComponent } from './liquid-container/liquid-container.component';
import { CdfSectionComponent } from './cdf-section/cdf-section.component';
import { ExamsSectionComponent } from './exams-section/exams-section.component';
import { ExamComponent } from './exam/exam.component';
import { ExamEditorComponent } from './exam-editor/exam-editor.component';
import { EcdfGraphComponent } from './ecdf-graph/ecdf-graph.component'

const store = createStore(appReducer);

@NgModule({
  declarations: [
    AppComponent,
    ExamsComponent,
    LiquidContainerComponent,
    CdfSectionComponent,
    ExamsSectionComponent,
    ExamComponent,
    ExamEditorComponent,
    EcdfGraphComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: 'AppStore', useValue: store },
    CDFActions,
    ExamsActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
