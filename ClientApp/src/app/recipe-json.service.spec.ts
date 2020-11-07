import { TestBed } from '@angular/core/testing';

import { RecipeJsonService } from './recipe-json.service';

describe('RecipeJsonService', () => {
  let service: RecipeJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
