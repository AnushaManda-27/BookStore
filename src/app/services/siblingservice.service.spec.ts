import { TestBed } from '@angular/core/testing';

import { SiblingserviceService } from './siblingservice.service';

describe('SiblingserviceService', () => {
  let service: SiblingserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiblingserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
