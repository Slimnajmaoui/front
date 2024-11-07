import { TestBed } from '@angular/core/testing';

import { AffprojetService } from './affprojet.service';

describe('AffprojetService', () => {
  let service: AffprojetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AffprojetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
