import { TestBed } from '@angular/core/testing';

import { emailService } from './email-service.service';

describe('EmailServiceService', () => {
  let service: emailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(emailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
