/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppBaseService } from './app-base.service';

describe('Service: AppBase', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppBaseService]
    });
  });

  it('should ...', inject([AppBaseService], (service: AppBaseService) => {
    expect(service).toBeTruthy();
  }));
});
