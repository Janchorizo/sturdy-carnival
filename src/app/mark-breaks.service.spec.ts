import { TestBed } from '@angular/core/testing';

import { MarkBreaksService } from './mark-breaks.service';

describe('MarkBreaksService', () => {
  let service: MarkBreaksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkBreaksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
