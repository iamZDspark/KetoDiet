import { TestBed } from '@angular/core/testing';

import { NutrientsTypeService } from './nutrients-type.service';

describe('NutrientsTypeService', () => {
  let service: NutrientsTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NutrientsTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
