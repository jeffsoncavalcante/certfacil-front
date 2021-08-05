import { TestBed } from '@angular/core/testing';

import { GroupeventesService } from './groupeventes.service';

describe('GroupeventesService', () => {
  let service: GroupeventesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupeventesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
