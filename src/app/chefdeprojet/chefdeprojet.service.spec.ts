import { TestBed } from '@angular/core/testing';

import { ChefdeprojetService } from './chefdeprojet.service';

describe('ChefdeprojetService', () => {
  let service: ChefdeprojetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChefdeprojetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
