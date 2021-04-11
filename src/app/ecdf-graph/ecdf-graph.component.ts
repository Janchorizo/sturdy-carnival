import { Component, OnInit, AfterContentInit, OnChanges } from '@angular/core';

import { ExamsService } from '../exams.service';
import * as d3 from 'd3';
import { pointers } from 'd3';


@Component({
  selector: 'app-ecdf-graph',
  templateUrl: './ecdf-graph.component.html',
  styleUrls: ['./ecdf-graph.component.css']
})
export class EcdfGraphComponent implements OnInit, AfterContentInit {
  examsService: ExamsService;
  examResults!: number[];
  xScale: any;
  yScale: any;
  private svg: any;

  constructor(examsService: ExamsService) {
    this.examsService = examsService;
    this.examResults = [];
  }

  ngAfterContentInit(): void {
    this.setupSVG();
    this.getResults();
    window.onresize = () => this.setupSVG();
  }

  ngOnInit(): void {
  }

  private getResults() {
    const handleUpdate = this.handleUpdate.bind(this);
    this.examsService.getResults()
      .subscribe((results: number[]) => {
        handleUpdate(results)
      });
  }

  private handleUpdate(results: number[]){
    this.examResults = results;
    this.renderGraph(this.examResults);    
  }

  private setupSVG() {
    const parent = document.getElementById('ecdf-graph');
    this.svg = d3.select(parent).select('figure#ecdf-graph svg');
    const bbox = parent?.getBoundingClientRect();

    this.svg
      .attr('width', bbox?.width)
      .attr('height', (bbox?.width || 0) / 2);

    this.setupAxis();
    this.renderGraph(this.examResults);
  }

  private setupAxis() {
    this.xScale = d3.scaleLinear()
      .domain([0, 100])
      .range([0, +this.svg.attr('width')]);

    this.yScale = d3.scaleLinear()
      .domain([0, 1])
      .range([+this.svg.attr('height'), 0]);

    this.svg.select('.yAxes')
      .call(d3.axisLeft(this.yScale))
      .selectAll('.tick line')
      .attr('x2', this.xScale.range()[1])
      .attr('stroke', '#dcdcdc');

    this.svg.selectAll('.yAxes text')
      .style('font-family', 'kiwi');

    this.svg.select('.xAxes')
      .call(d3.axisBottom(this.xScale))
      .attr('transform', `translate(0, ${this.yScale.range()[0]})`)
      .selectAll('.tick line')
      .attr('y2', -this.yScale.range()[0])
      .attr('stroke', '#dcdcdc');
    
    this.svg.selectAll('.xAxes text')
      .style('font-family', 'kiwi');

    this.svg.selectAll('path.domain')
      .style('display', 'none');
  }

  private calculateECDF(values: number[]): number[][] {
    const valueCount: Map<number, number> = new Map(
      [...new Set(values)].map((d: number) => [d, 0])
    );

    values.forEach((d: number) => {
      valueCount.set(d, (valueCount.get(d) || 0) + 1);
    });

    let ecdf = [...valueCount]
      .sort((a, b) => (+a[0]) - (+b[0]))
      .map((d: any) => [d[0], d[1] / values.length]);

    // accumulate the values now
    for (let i=1; i<ecdf.length; i++) {
        ecdf[i][1] = ecdf[i][1] + ecdf[i - 1][1];
    }

    return ecdf;
  }

  private normalizeForManhattanDistance(points: number[][]): number[][] {
    const normalized = [[0, this.yScale.range()[0]]];

    for (let i=0; i<points.length; i++) {
        const lastPoint = normalized[normalized.length-1];
        normalized.push([points[i][0], lastPoint[1]]);
        normalized.push(points[i]);
    }

    return normalized;
  }

  private applyPointsToPath(points: number[][], path: any): any {
    points.forEach((d: number[], i: number) => {
      if (i > 0) {
        path.lineTo(...d)
      } else {
        path.moveTo(...d);
      }
    });
  }

  private renderGraph(results: number[]) {
    const ecdf = this.calculateECDF(results);
    const path = d3.path();

    const points = ecdf.map((point: number[]) => [
      this.xScale(point[0]),
      this.yScale(point[1])
    ])
    const normalizedPoints = this.normalizeForManhattanDistance(points);
    this.applyPointsToPath(normalizedPoints, path);

    this.svg.select('path.line')
      .attr('d', path);
  }
}
