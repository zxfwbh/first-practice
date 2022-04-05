/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ModulesBaseService } from './modules-base.service';

describe('Service: ModulesBase', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModulesBaseService]
    });
  });

  it('should ...', inject([ModulesBaseService], (service: ModulesBaseService) => {
    expect(service).toBeTruthy();
  }));
});
