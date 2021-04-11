import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- ngModel lives here

import { AppComponent } from './app.component';
import { appReducer } from '../redux/appReducer';
import { MarkBreaksActions } from '../redux/markBreaksActions';
import { ExamsActions } from '../redux/examsActions';
import { createStore } from 'redux';
import { ExamsComponent } from './exams/exams.component';
import { LiquidContainerComponent } from './liquid-container/liquid-container.component';
import { CdfSectionComponent } from './cdf-section/cdf-section.component';
import { ExamsSectionComponent } from './exams-section/exams-section.component';
import { ExamComponent } from './exam/exam.component';
import { ExamEditorComponent } from './exam-editor/exam-editor.component';
import { EcdfGraphComponent } from './ecdf-graph/ecdf-graph.component';
import { MarkBreaksComponent } from './mark-breaks/mark-breaks.component'

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
    EcdfGraphComponent,
    MarkBreaksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    { provide: 'AppStore', useValue: store },
    MarkBreaksActions,
    ExamsActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
