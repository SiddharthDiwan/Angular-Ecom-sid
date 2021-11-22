import { TestBed } from '@angular/core/testing';

import { CrudOpnService } from './crud-opn.service';

describe('CrudOpnService', () => {
  let service: CrudOpnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudOpnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
