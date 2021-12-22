import { TestBed } from '@angular/core/testing';

import { SearchDataShareService } from './search-data-share.service';

describe('SearchDataShareService', () => {
  let service: SearchDataShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchDataShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
