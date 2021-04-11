import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdfSectionComponent } from './cdf-section.component';

describe('CdfSectionComponent', () => {
  let component: CdfSectionComponent;
  let fixture: ComponentFixture<CdfSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdfSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdfSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
