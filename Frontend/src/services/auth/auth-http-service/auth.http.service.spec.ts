import { TestBed } from '@angular/core/testing';

import { AuthHttpService } from './auth.htttp.service';

describe('AuthService', () => {
  let service: AuthHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
