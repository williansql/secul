import { TestBed } from '@angular/core/testing';

import { BoxFileService } from './box-file.service';

describe('BoxFileService', () => {
  let service: BoxFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoxFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
