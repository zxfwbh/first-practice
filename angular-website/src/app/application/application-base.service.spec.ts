/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApplicationBaseService } from './application-base.service';

describe('Service: ApplicationBase', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplicationBaseService]
    });
  });

  it('should ...', inject([ApplicationBaseService], (service: ApplicationBaseService) => {
    expect(service).toBeTruthy();
  }));
});
