/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecoverService } from './recover.service';

describe('Service: Recover', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecoverService]
    });
  });

  it('should ...', inject([RecoverService], (service: RecoverService) => {
    expect(service).toBeTruthy();
  }));
});
