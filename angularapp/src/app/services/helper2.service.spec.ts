import { TestBed } from '@angular/core/testing';

import { Helper2Service } from './helper2.service';

describe('Helper2Service', () => {
  let service: Helper2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Helper2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
