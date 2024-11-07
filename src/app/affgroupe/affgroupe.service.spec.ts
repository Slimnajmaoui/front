import { TestBed } from '@angular/core/testing';

import { AffgroupeService } from './affgroupe.service';

describe('AffgroupeService', () => {
  let service: AffgroupeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AffgroupeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
