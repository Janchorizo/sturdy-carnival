import { TestBed } from '@angular/core/testing';

import { CdfService } from './cdf.service';

describe('CdfService', () => {
  let service: CdfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CdfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
