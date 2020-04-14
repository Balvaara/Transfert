import { TestBed } from '@angular/core/testing';

import { PartenerService } from './partener.service';

describe('PartenerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PartenerService = TestBed.get(PartenerService);
    expect(service).toBeTruthy();
  });
});
