import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidContainerComponent } from './liquid-container.component';

describe('LiquidContainerComponent', () => {
  let component: LiquidContainerComponent;
  let fixture: ComponentFixture<LiquidContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiquidContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquidContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
