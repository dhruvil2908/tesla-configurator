import { TestBed } from '@angular/core/testing';

import { TeslaModelService } from './tesla-model.service';

describe('TeslaModelService', () => {
  let service: TeslaModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeslaModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
