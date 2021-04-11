import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkBreaksComponent } from './mark-breaks.component';

describe('MarkBreaksComponent', () => {
  let component: MarkBreaksComponent;
  let fixture: ComponentFixture<MarkBreaksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkBreaksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkBreaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
