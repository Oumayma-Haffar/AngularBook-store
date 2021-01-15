import { TestBed } from '@angular/core/testing';

import { BookpanierService } from './bookpanier.service';

describe('BookpanierService', () => {
  let service: BookpanierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookpanierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
