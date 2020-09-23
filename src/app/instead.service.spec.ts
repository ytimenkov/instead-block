import { TestBed } from '@angular/core/testing';

import { InsteadService } from './instead.service';

describe('InsteadService', () => {
  let service: InsteadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsteadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
