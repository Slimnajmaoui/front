import { TestBed } from '@angular/core/testing';

import { AfftacheService } from './afftache.service';

describe('AfftacheService', () => {
  let service: AfftacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfftacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
