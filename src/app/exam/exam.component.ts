import { Component, OnInit, Input } from '@angular/core';
import { ExamsService } from '../exams.service';


@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  examsService: ExamsService;
  @Input()
  index!: number;
  @Input()
  score!: number;

  constructor(examsService: ExamsService) {
    this.examsService = examsService;
  }

  ngOnInit(): void {
  }

  onDeleteClick() {
    this.examsService.removeResult(this.index);
  }
}
