import { Component, OnInit } from '@angular/core';
import { MarkBreaksService } from '../mark-breaks.service';


@Component({
  selector: 'app-mark-breaks',
  templateUrl: './mark-breaks.component.html',
  styleUrls: ['./mark-breaks.component.css']
})
export class MarkBreaksComponent implements OnInit {
  markBreaksService: MarkBreaksService;
  breaks!: {[index: string]:any};

  constructor(markBreaksService: MarkBreaksService) {
    this.markBreaksService = markBreaksService;
  }

  ngOnInit(): void {
      this.getBreaks();
  }

  private getBreaks() {
      this.markBreaksService.getBreaks()
        .subscribe((breaks: object) => {
            this.breaks = breaks;
        });
  }

  handleChange(mark: string, nextVal: any) {
      this.markBreaksService.setBreak(mark, nextVal);
  }
}
