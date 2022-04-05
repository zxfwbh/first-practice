/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SystemBaseService } from './system-base.service';

describe('Service: System.base', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SystemBaseService]
    });
  });

  it('should ...', inject([SystemBaseService], (service: SystemBaseService) => {
    expect(service).toBeTruthy();
  }));
});
