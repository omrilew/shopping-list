import { TestBed } from '@angular/core/testing';

import { CurrentListService } from './current-list.service';

describe('CurrentListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentListService = TestBed.get(CurrentListService);
    expect(service).toBeTruthy();
  });
});
