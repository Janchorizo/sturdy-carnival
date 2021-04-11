import { Component, OnInit } from '@angular/core';
import { ExamsService } from '../exams.service';


@Component({
  selector: 'app-exam-editor',
  templateUrl: './exam-editor.component.html',
  styleUrls: ['./exam-editor.component.css']
})
export class ExamEditorComponent implements OnInit {
  examsService: ExamsService;
  score: number;

  constructor(examsService: ExamsService) {
    this.examsService = examsService;
    this.score = 50;
  }

  ngOnInit(): void {
  }

  onIncrementClick() {
    this.score = Math.min(100, this.score + 1);
  }

  onDecrementClick() {
    this.score = Math.max(0, this.score - 1);
  }

  onAddClick() {
    this.examsService.addResult(this.score);
  }
}
