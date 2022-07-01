import { TestBed } from '@angular/core/testing';

import { InfoPagesService } from './info-pages.service';

describe('InfoPagesService', () => {
  let service: InfoPagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoPagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
