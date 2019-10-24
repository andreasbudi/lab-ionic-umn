import { TestBed } from '@angular/core/testing';

import { MybookingServiceService } from './mybooking-service.service';

describe('MybookingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MybookingServiceService = TestBed.get(MybookingServiceService);
    expect(service).toBeTruthy();
  });
});
