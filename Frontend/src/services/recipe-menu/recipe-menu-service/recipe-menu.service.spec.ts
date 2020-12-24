import { TestBed } from '@angular/core/testing';

import { RecipeMenuService } from './recipe-menu.service';

describe('RecipeMenuService', () => {
  let service: RecipeMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
