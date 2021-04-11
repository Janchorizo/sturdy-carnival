import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcdfGraphComponent } from './ecdf-graph.component';

describe('EcdfGraphComponent', () => {
  let component: EcdfGraphComponent;
  let fixture: ComponentFixture<EcdfGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcdfGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcdfGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
