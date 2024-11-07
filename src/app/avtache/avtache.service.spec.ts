import { TestBed } from '@angular/core/testing';

import { AvtacheService } from './avtache.service';

describe('AvtacheService', () => {
  let service: AvtacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvtacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
