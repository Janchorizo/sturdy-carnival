import { Component, OnInit, Input } from '@angular/core';
import { ExamsService } from '../exams.service';
import { MarkBreaksService } from '../mark-breaks.service';


@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  examsService: ExamsService;
  markBreaksService: MarkBreaksService;
  @Input()
  index!: number;
  @Input()
  score!: number;
  mark: string;

  constructor(examsService: ExamsService, markBreaksService: MarkBreaksService) {
    this.examsService = examsService;
    this.markBreaksService = markBreaksService;
    this.mark = this.markBreaksService.calculateMark(this.score);
  }

  ngOnInit(): void {
    this.getBreaks();
  }

  private getBreaks() {
    this.markBreaksService.getBreaks()
    .subscribe(() => {
      this.mark = this.markBreaksService.calculateMark(this.score);
    });
  }

  onDeleteClick() {
    this.examsService.removeResult(this.index);
  }
}
