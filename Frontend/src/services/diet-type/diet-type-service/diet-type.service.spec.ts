import { TestBed } from '@angular/core/testing';

import { DietTypeService } from './diet-type.service';

describe('DietTypeService', () => {
  let service: DietTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DietTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
