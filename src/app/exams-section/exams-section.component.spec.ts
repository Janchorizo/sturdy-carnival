import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamsSectionComponent } from './exams-section.component';

describe('ExamsSectionComponent', () => {
  let component: ExamsSectionComponent;
  let fixture: ComponentFixture<ExamsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
