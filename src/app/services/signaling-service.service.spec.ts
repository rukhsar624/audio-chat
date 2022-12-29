import { TestBed } from '@angular/core/testing';

import { SignalingServiceService } from './signaling-service.service';

describe('SignalingServiceService', () => {
  let service: SignalingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
