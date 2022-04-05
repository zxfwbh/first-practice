/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DesignBaseService } from './design-base.service';

describe('Service: DesignBase', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DesignBaseService]
    });
  });

  it('should ...', inject([DesignBaseService], (service: DesignBaseService) => {
    expect(service).toBeTruthy();
  }));
});
