import { Component, OnInit } from '@angular/core';
import { ExamsService } from '../exams.service';


@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent implements OnInit {
  examsService: ExamsService;
  examResults: number[];

  constructor(examsService: ExamsService) {
      this.examsService = examsService;
      this.examResults = [];
  }

  ngOnInit(): void {
      this.getResults();
  }

  private getResults() {
      console.log(this.examsService)
      this.examsService.getResults()
        .subscribe((results: number[]) => {
            console.log(results)
            this.examResults = results
        });
  }

  onAddClick() {
      this.examsService.addResult(Math.random() * 10);
  }
}
