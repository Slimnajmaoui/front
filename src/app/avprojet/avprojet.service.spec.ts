import { TestBed } from '@angular/core/testing';

import { AvprojetService } from './avprojet.service';

describe('AvprojetService', () => {
  let service: AvprojetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvprojetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
