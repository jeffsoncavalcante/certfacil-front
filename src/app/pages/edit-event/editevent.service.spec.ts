/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EditeventService } from './editevent.service';

describe('Service: Editevent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditeventService]
    });
  });

  it('should ...', inject([EditeventService], (service: EditeventService) => {
    expect(service).toBeTruthy();
  }));
});
