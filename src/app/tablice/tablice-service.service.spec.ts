import { TestBed } from '@angular/core/testing';

import { TabliceServiceService } from './tablice-service.service';

describe('TabliceServiceService', () => {
  let service: TabliceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabliceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
