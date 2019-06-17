import { TestBed } from '@angular/core/testing';

import { EindopdrachtService } from './eindopdracht.service';

describe('EindopdrachtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EindopdrachtService = TestBed.get(EindopdrachtService);
    expect(service).toBeTruthy();
  });
});
